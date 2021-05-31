var fs = require('fs');
var stringify = require('csv-stringify');
const hazard = require('hasard');

const text = hazard.object({
    value: hazard.value(['BOOLEANSyntaxError', 'await is only', 'valid in async', 'function at createScript', 'at Object.runInThisContext', 'a Module._comtpile', 'at Object.Module._extensions..js',]), // randomly choose between 2 values
    font: hazard.value(['Arials', 'Average Font', 'Awesome Font', 'Kaktuse', 'Not Awesome Font']),
    storyId: hazard.integer(1, 1000)
});

const story = hazard.object({
    isSponsored: hazard.integer(0, 1),
    isCloseFriends: hazard.integer(0, 1)

});
 
const textList = text.run(1000);
const storyList = story.run(1000);

stringify(textList, {
    header: true
}, function (err, output) {
    // fs.writeFile(__dirname+'/texts.csv', output);
    fs.writeFile(__dirname+'/texts.csv', output);

})

stringify(storyList, {
    header: true
}, function (err, output) {
    fs.writeFile(__dirname+'/stories.csv', output);
})