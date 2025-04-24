const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Limule,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function VELDRA_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Limule = Limule({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Limule.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Limule.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Limule.ev.on('creds.update', saveCreds)
            Pair_Code_By_Limule.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Limule.sendMessage(Pair_Code_By_Limule.user.id, { text: '' + b64data });

               let VELDRA_MD_TEXT = `┏━━━━━━━━━━━━━━⍟
┃✩𝐕𝐄𝐋𝐃𝐑𝐀-𝐌𝐃 SUCCESSFULLY 
┃✩CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━━━━⍟
┏━━━━━━━━━━━━━━━━━━━⍟
┃❥︎Creator ➪ 𝐋𝐈𝐌𝐔𝐋𝐄 𝐒𝐎𝐋𝐈𝐓𝐀𝐑𝐔𝐒 
┗━━━━━━━━━━━━━━━━━━━━⍟
┏━━━━━━━━━━━━━━━━━━━⍟
┃❥︎WhattsApp Channel ➪https://whatsapp.com/channel/0029Vafhjw0IXnlonRAQMM2l
┗━━━━━━━━━━━━━━━━━━━━⍟
┏━━━━━━━━━━━━━━━━━━━━⍟
┃❥︎Please Follow My Support Channel
┃❥︎Wanna talk to me?➪https://wa.me/237698581946
┗━━━━━━━━━━━━━━━━━━━━━━━⍟
 © *2025* 𝐋𝐈𝐌𝐔𝐋𝐄 𝐒𝐎𝐋𝐈𝐓𝐀𝐑𝐔𝐒
 
_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Limule.sendMessage(Pair_Code_By_Limule.user.id,{text:VELDRA_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Limule.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    VELDRA_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await VELDRA_MD_PAIR_CODE()
});
module.exports = router
