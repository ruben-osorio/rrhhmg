import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import config from '../config';
import { UploadSettings } from './interfaces';
const publicDir = config.app.publicDir;
const tempDir = config.upload.tempDir;

export default class Uploader {
	filePaths:string = "";
	fieldname = "";
	uploadSettings = {} as UploadSettings;
	constructor(filePaths: string, fieldname: string) {
		this.filePaths = filePaths;
		this.fieldname = fieldname;
		this.uploadSettings = config.upload[fieldname];
	}
	moveUploadedFiles() {
		if (this.filePaths) {
			let arrFiles = this.filePaths.split(",");
			let uploadedFiles = [];
			arrFiles.forEach(file => {
				if (file.indexOf(tempDir) > -1) {
					let tmpFile = path.join(publicDir, file);
					if (fs.existsSync(tmpFile)) {
						let movedFile = this.moveFile(tmpFile);
						uploadedFiles.push(movedFile);
					}
				}
				else {
					uploadedFiles.push(file);
				}
			});
			return uploadedFiles.join(",");
		}
		return "";
	}
	moveFile(file) {
		let fileName = path.basename(file);
		let newFile = path.join(publicDir, this.uploadSettings.uploadDir, fileName);
		fs.renameSync(file, newFile);
		if (this.isImage(newFile)) {
			this.resizeImage(newFile);
		}

		let fileUrl = path.join(this.uploadSettings.uploadDir, fileName);
		if (this.uploadSettings.returnFullpath) {
			fileUrl = config.app.url + fileUrl;
		}
		fileUrl = fileUrl.replace(/\\/g, "/");
		return fileUrl;
	}
	isImage(file) {
		let imgExtensions = ["jpg", "png", "gif", "jpeg"];
		let fileExt = path.extname(file).substr(1).toLowerCase();
		return imgExtensions.includes(fileExt);
	}

	resizeImage(filePath) {
		let resizeSettings = this.uploadSettings.imageResize || [];

		resizeSettings.forEach(resize => {

			let fileName = path.basename(filePath);
			var uploadDir = this.uploadSettings.uploadDir || '';
			let newFileDir = path.join(publicDir, uploadDir, resize.name);

			if (!fs.existsSync(newFileDir)) {
				fs.mkdirSync(newFileDir);
			}

			let newFileName = path.join(newFileDir, fileName);
			let fit = resize.mode || "cover";
			let size = {
				fit
			};
			if (resize.width) {
				size['width'] = resize.width
			}
			if (resize.height) {
				size['height'] = resize.height
			}
			sharp(filePath).resize(size).toFile(newFileName).then(function (newFileInfo) {
				//console.log("Success")
			}).catch(function (err) {
				console.error("Image Resize Error occured", err);
			});
		});
	}
}
