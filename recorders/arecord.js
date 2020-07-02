// On some systems (RasPi), arecord is the prefered recording binary
module.exports = (options) => {
  const cmd = 'arecord';

  const args = [
    // '-q', // show no progress
    '-f', 'S16_LE', // Sample format
    '-r', options.sampleRate, // sample rate
    '-c', options.channels, // channels
    // '-t', options.audioType, // audio type
    // '-' // pipe
  ]

  if (options.dplug) {
    args.unshift(options.dplug);
  } else if (options.device) {
    args.unshift('-D', options.device);
  }

  return { cmd, args }
}
