
/**
 * Module dependencies.
 */

var path = require("path"),
	spawn = require('child_process').spawn,
	task = require('./app.json'),
	carrier = require('carrier'),
	sys = require('sys'),
	lang = require('./lang.js'),
	async = require('async');

var argv = require('minimist')(process.argv.slice(2));

console.dir(argv);

if (argv.tasks) {
	console.log('Demux disc tasks');
	
	var tasks = require(argv.tasks);
	
	//console.dir(tasks);
	
	
	
	return;
} else {
	console.log('Processing disc to demux');
	return;
}

//console.log('Language Name: ' + lang.getLanguageName('es'));
//console.log('Language Name: ' + lang.getIsoLang('Spanish'));

//console.log('TASK args:');

//console.log(task.args);

find_tracks(function (err, tracks) {
	if (err) {
		console.log('Error: ' + err);
		return;
	}
	/*
	console.log('Found tracks ' + tracks.length + ':');
	
	console.log(sys.inspect(tracks));
	/**/
	var checkInfoArray = [];
	
	for (var i = 0; i < tracks.length; i++) {
		checkInfoArray.push(check_track(tracks[i]));
	}
	
	/*
	check_track(tracks[0])(function (trackInfo) {
		console.log('tracks[0]' + sys.inspect(trackInfo));
		console.log('END');
	});
	/**/
	
	async.parallel(checkInfoArray,
		// optional callback
		function(err, results){
			if (err) {
				console.log('Async Error: ' + err);
				return;
			}
			console.log('RESULT');
			console.log(sys.inspect(results));
			
			var jf = require('jsonfile'),
				filePath = task.outPath + task.tasksFileName;
			
			//write result
			console.log('tasks will write in: ' + filePath);
			jf.writeFile(filePath, results, function(err) {
				if (err) {
					console.log('write file Error: ' + err);
					return;
				}
				console.log('tasks wrote in: ' + filePath);
			});
			
			// the results array will equal ['one','two'] even though
			// the second function had a shorter timeout.
	});
	
	/*
	async.parallel([
		function(callback){
			setTimeout(function(){
				callback(null, 'one');
			}, 200);
		},
		function(callback){
			setTimeout(function(){
				callback(null, 'two');
			}, 100);
		}
	],
	// optional callback
	function(err, results){
		// the results array will equal ['one','two'] even though
		// the second function had a shorter timeout.
	});
	/**/
});

var check_track = function(trackInfo) {
	return function (callback) {
		var exeArgs = [trackInfo.brdPath, trackInfo.trackNumber];
		
		carrier.carry(spawn(task.exePath, exeArgs).stdout).
		on('line', function (line) {
			var lineTrim = line.trim().replace(/[\x00-\x1f]/g, '');
			var regexp = /^[1-9]\:/;
			var matches  = regexp.exec(lineTrim);
			/*
			console.log('Line');
			console.log('charCodeAt(0): ' + lineTrim.charCodeAt(0));
			console.log('charAt(0): ' + lineTrim.charAt(0));
			console.log(lineTrim.length);
			
			console.log('matches:');
			console.log(matches);
			*/
			if(matches ) {
				var more = lineTrim.replace(regexp, '').trim().split(',');
				//console.log(more);
				var foundTrackElement = task.trackElements[more[0]];
				if (!foundTrackElement) {
					callback('No exist track element info for line: ' + lineTrim);
				}
				if (!trackInfo.track) {
					trackInfo.track = [];
				}
				var demuxTrack = matches[0] + task.outPath + trackInfo.name + foundTrackElement.outSufixName;
				
				if (foundTrackElement.languagePos) {
					//console.log('Lang: ' + more[foundTrackElement.languagePos]);
					demuxTrack += '.' + lang.getIsoLang(more[foundTrackElement.languagePos].trim());
				}
				
				demuxTrack += foundTrackElement.outExtension;
				
				if (foundTrackElement.params) {
					demuxTrack += ' ' + foundTrackElement.params;
				}
				
				trackInfo.track.push(demuxTrack);
			}
		})
		.on('error', function (err) {
			callback('can\'t load brd info:' + err);
		})
		.on('end', function () {
			//console.log('Found trackinfo ' + sys.inspect(trackInfo));
			callback(null, trackInfo);
		});
	};
};

function find_tracks(callback) {
	var tracks = [];
	carrier.carry(spawn(task.exePath, task.args).stdout).
	on('line', function (line) {
		var lineTrim = line.replace(/[\x00-\x1f]/g, '');
		var regexp = /^[1-9]\)/;
		var matches  = regexp.exec(lineTrim);
		/*
		console.log('Line');
		console.log('charCodeAt(0): ' + lineTrim.charCodeAt(0));
		console.log('charAt(0): ' + lineTrim.charAt(0));
		console.log(lineTrim.length);
		
		console.log('matches:');
		console.log(matches);
		*/
		if(matches ) {
			//console.log(lineTrim.split(','));
			var splitLine = lineTrim.split(',');
			var name = splitLine.length == 3 ? splitLine[1].trim() : splitLine[0].trim();
			tracks.push({
				brdPath: task.args[0],
				trackNumber: matches[0],
				name: name
			});
		}
	})
	.on('error', function (err) {
		callback("can't load brd info:" + err);
	})
	.on('end', function () {
		//console.log('Found tracks ' + sys.inspect(tracks));
		//callback(null, { tracks: tracks });
		callback(null, tracks);
	});
}

/*
spawn_collect(task.exePath, task.args, function (err, code, result) {
	console.log('RESULT');
	console.log(result);
});

function spawn_collect(exe, args, callback) {
	var result = '';
	var process = spawn(exe, args).on('exit', function(code) {
		console.log('Finished ' + exe + ' code ' + code);
		if(code != 0)
			callback(exe + ' returned ' + code + ': ' + result.split(/\r?\n/)[0]);
		else
			callback(null, code, result);
	}).on('error', callback);
	
	process.stdout.on('data', function(data) { result = result + data }).on('error', callback);
	process.stderr.on('data', function(data) { result = result + data }).on('error', callback);
}
*/

/*
var eac3toExe = spawn(exePath + 'eac3to', [pathBRD], {
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
*/