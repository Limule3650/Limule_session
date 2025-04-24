const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Limule,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function VELDRA_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Limule = Limule({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Limule.ev.on('creds.update', saveCreds)
			Qr_Code_By_Limule.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Limule.sendMessage(Qr_Code_By_Limule.user.id, { text: '' + b64data });
	
				   let VELDRA_MD_TEXT = `┏━━━━━━━━━━━━━━⍟
┃𝐕𝐄𝐋𝐃𝐑𝐀-𝐌𝐃 SUCCESSFULLY 
┃CONNECTED ✅
┗━━━━━━━━━━━━━━━━━━⍟
┏━━━━━━━━━━━━━━━━━━━⍟
┃❥︎Creator ➪𝐋𝐈𝐌𝐔𝐋𝐄 𝐒𝐎𝐋𝐈𝐓𝐀𝐑𝐔𝐒
┗━━━━━━━━━━━━━━━━━━━━⍟
┏━━━━━━━━━━━━━━━━━━━⍟
┃❥︎WhattsApp Channel ➪https://whatsapp.com/channel/0029Vafhjw0IXnlonRAQMM2l
┗━━━━━━━━━━━━━━━━━━━━⍟
┏━━━━━━━━━━━━━━━━━━━━⍟
┃❥︎Please Follow My Support Channel
┃❥︎Wanna talk to me?➪https://wa.me/237698581946 
┗━━━━━━━━━━━━━━━━━━━━━━━⍟
 © *2025* 𝐋𝐈𝐌𝐔𝐋𝐄 𝐒𝐎𝐋𝐈𝐓𝐀𝐑𝐔𝐒
____________________________________
	
_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_Limule.sendMessage(Qr_Code_By_Limule.user.id,{text:VELDRA_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Limule.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					VELDRA_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await VELDRA_MD_QR_CODE()
});
module.exports = router
