
/**
 * Module dependencies.
 */

var path = require("path"),
	spawn = require('child_process').spawn,
	exePath = path.dirname(__dirname),
	pathBRD = 'E:\brdrip\Archer2\ARCHER_SEASON_2_DISC_1';

var eac3toExe = spawn(exePath + '/eac3to', [], {
	cwd: exePath
});

eac3toExe.stdout.on('data', function (data) {
	console.log('stdout: ' + data);
});

eac3toExe.stderr.on('data', function (data) {
	console.log('stderr: ' + data);
});

eac3toExe.on('close', function (code) {
	console.log('child process exited with code ' + code);
});