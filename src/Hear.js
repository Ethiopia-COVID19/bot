/**
 * 
 * 
 * Hear.js
 * 
 * 
 */

const Strings = require("./Strings");
const { Keyboard } = require("./Keyboard");
// const { Log } = require("./Log");


class Hear {
    constructor(ctx) {
        this.ctx = ctx;
        this.keyboard = new Keyboard();
    }


    hear() {

        this.ctx.hears(Strings.report_string, (ctx) => {
           ctx.flow.enter("reportScene");
        });

        this.ctx.hears(Strings.about, (ctx) => {
            ctx.flow.enter("aboutScene");
        });

        this.ctx.hears(Strings.symptom, (ctx) => {
            ctx.flow.enter("symptomScene");
        });

        this.ctx.hears(Strings.statistics, (ctx) => {
            ctx.flow.enter("statScene");
        });

       this.ctx.hears(Strings.ethiopianstatistics, (ctx) => {
           ctx.flow.enter("ethioStatScene");
        });

        this.ctx.hears(Strings.supportus, (ctx) => {
            ctx.flow.enter("supportusScene");
        });

       this.ctx.hears(Strings.doihavecovid19, (ctx) => {
           ctx.flow.enter("doIhaveScene");
        });

        this.ctx.hears(Strings.whatshouldido, (ctx) => {
            ctx.flow.enter("whatshouldScene");
        });

        this.ctx.hears(Strings.cancel, (ctx) => {
            ctx.flow.leave();

            ctx.reply("Canceld!", this.keyboard.mainKeyboard());
        });


    }
}


module.exports.Hear = Hear;
