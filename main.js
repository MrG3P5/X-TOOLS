/*
 Hanya gabut:v
 Don't be a script kiddie
 Kamu programmer atau youtuber? ;v
*/

const chalk = require('chalk');
const axios = require('axios');
const prompt = require('prompt-sync')({ sigint: false });
const whois = require('whois-json');
const google = require('google-it');
const figlet = require('figlet');

function print (string) {
    return console.log(string);
}

const banner = figlet.textSync('X - TOOLS', {
    font: 'Slant',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 50,
    whitespaceBreak: false
});

const list_tools = `${chalk.red(banner)}
${chalk.green('[')}${chalk.white('+')}${chalk.green(']')} ${chalk.yellowBright('Tools Created By X - MrG3P5')}

.:${chalk.bgRedBright('SELECT ANY TOOLS FOR YOUR VICTIM')}:.

${chalk.red('[')}${chalk.whiteBright('1')}${chalk.red(']')} ${chalk.yellowBright('Traceroute')}
${chalk.red('[')}${chalk.whiteBright('2')}${chalk.red(']')} ${chalk.yellowBright('Ping Test')}
${chalk.red('[')}${chalk.whiteBright('3')}${chalk.red(']')} ${chalk.yellowBright('DNS Lookup')}
${chalk.red('[')}${chalk.whiteBright('4')}${chalk.red(']')} ${chalk.yellowBright('Reverse DNS')}
${chalk.red('[')}${chalk.whiteBright('5')}${chalk.red(']')} ${chalk.yellowBright('Find DNS Host')}
${chalk.red('[')}${chalk.whiteBright('6')}${chalk.red(']')} ${chalk.yellowBright('Find Shared DNS')}
${chalk.red('[')}${chalk.whiteBright('7')}${chalk.red(']')} ${chalk.yellowBright('Zone Transfer')}
${chalk.red('[')}${chalk.whiteBright('8')}${chalk.red(']')} ${chalk.yellowBright('Whois Lookup')}
${chalk.red('[')}${chalk.whiteBright('9')}${chalk.red(']')} ${chalk.yellowBright('IP Location Lookup')}
${chalk.red('[')}${chalk.whiteBright('10')}${chalk.red(']')} ${chalk.yellowBright('TCP Port Scan (nmap)')}
${chalk.red('[')}${chalk.whiteBright('11')}${chalk.red(']')} ${chalk.yellowBright('Subnet Lookup')}
${chalk.red('[')}${chalk.whiteBright('12')}${chalk.red(']')} ${chalk.yellowBright('HTTP Header Check')}
${chalk.red('[')}${chalk.whiteBright('13')}${chalk.red(']')} ${chalk.yellowBright('Dork Engine')}
${chalk.red('[')}${chalk.whiteBright('00')}${chalk.red(']')} ${chalk.yellowBright('Exit')}\n`
console.clear();
print(list_tools)
const user_input = prompt(`${chalk.red('[')}${chalk.whiteBright('~')}${chalk.red(']')} ${chalk.greenBright('Which option number : ')}`);
switch (user_input) {
    case "00":
        print("See You...^.^")
        process.exit();
        break
    case "1":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} Traceroute script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Target : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            axios.get(`https://api.hackertarget.com/mtr/?q=${input_target}`).then(r => {
                print(r.data)
                process.exit();
            }).catch(e => {
                print("Error input invalid - enter IP or Hostname")
                process.exit();
            })
        }
        break
    case "2":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} Ping Test script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Target : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            axios.get(`https://api.hackertarget.com/nping/?q=${input_target}`).then(r => {
                print(r.data)
                process.exit();
            }).catch(e => {
                print("Error input invalid - enter IP or Hostname")
                process.exit();
            })
        }
        break
    case "3":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} DNS Lookup script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Target : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            axios.get(`https://api.hackertarget.com/dnslookup/?q=${input_target}`).then(r => {
                print(r.data)
                process.exit();
            }).catch(e => {
                print("Error input invalid - enter IP or Hostname")
                process.exit();
            })
        }
        break    
    case "4":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} Reverse DNS script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Target : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            axios.get(`https://api.hackertarget.com/reversedns/?q=${input_target}`).then(r => {
                print(r.data)
                process.exit();
            }).catch(e => {
                print("Error input invalid - enter IP or Hostname")
                process.exit();
            })
        }
        break
    case "5":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} Find DNS Host script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Target : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            axios.get(`https://api.hackertarget.com/hostsearch/?q=${input_target}`).then(r => {
                print(r.data)
                process.exit();
            }).catch(e => {
                print("Error input invalid - enter IP or Hostname")
                process.exit();
            })
        }
        break
    case "6":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} Find Shared DNS script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Target : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            axios.get(`https://api.hackertarget.com/findshareddns/?q=${input_target}`).then(r => {
                print(r.data)
                process.exit();
            }).catch(e => {
                print("Error input invalid - enter IP or Hostname")
                process.exit();
            })
        }
        break
    case "7":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} Zone Transfer script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Target : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            axios.get(`https://api.hackertarget.com/zonetransfer/?q=${input_target}`).then(r => {
                print(r.data)
                process.exit();
            }).catch(e => {
                print("Error input invalid - enter IP or Hostname")
                process.exit();
            })
        }
        break
    case "8":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} Whois Lookup script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Target : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            try {
                (async () => {
                    var res = await whois(input_target);
                    print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} status : ${res.status}\n[x] domainId : ${res.domainId}\n[x] domainName : ${res.domainName}\n[x] createdOn : ${res.createdOn}\n[x] expirationDate : ${res.expirationDate}\n[x] sponsoringRegistrarOrganization : ${res.sponsoringRegistrarOrganization}\n[x] sponsoringRegistrarUrl : ${res.nsponsoringRegistrarUrl}\n[x] sponsoringRegistrarStreet : ${res.sponsoringRegistrarStreet}\n[x] sponsoringRegistrarCity : ${res.sponsoringRegistrarCity}\n[x] sponsoringRegistrarStateProvince : ${res.sponsoringRegistrarStateProvince}\n[x] sponsoringRegistrarPostalCode : ${res.sponsoringRegistrarPostalCode}\n[x] sponsoringRegistrarCountry : ${res.sponsoringRegistrarCountry}\n[x] sponsoringRegistrarPhone : ${res.sponsoringRegistrarPhone}\n[x] sponsoringRegistrarEmail : ${res.sponsoringRegistrarEmail}\n[x] nameServer : ${res.nameServer}\n[x] dnssec : ${res.dnssec}`)
                    process.exit();
                })();
            } catch {
                print("Error input invalid - enter IP or Hostname")
                process.exit();
            }
        }
        break
    case "9":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} IP Location Lookup script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Target : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            axios.get(`https://api.hackertarget.com/geoip/?q=${input_target}`).then(r => {
                print(r.data)
                process.exit();
            }).catch(e => {
                print("Error input invalid - enter IP or Hostname")
                process.exit();
            })
        }
        break
    case "10":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} TCP Port Scan script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Target : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            axios.get(`https://api.hackertarget.com/nmap/?q=${input_target}`).then(r => {
                print(r.data)
                process.exit();
            }).catch(e => {
                print("Error input invalid - enter IP or Hostname")
                process.exit();
            })
        }
        break
    case "11":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} Subnet Lookup script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Target : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            axios.get(`https://api.hackertarget.com/subnetcalc/?q=${input_target}`).then(r => {
                print(r.data)
                process.exit();
            }).catch(e => {
                print("Error input invalid - enter IP or Hostname")
                process.exit();
            })
        }
        break
    case "12":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} HTTP Header Check script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Target : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            axios.get(`https://api.hackertarget.com/httpheaders/?q=${input_target}`).then(r => {
                print(r.data)
                process.exit();
            }).catch(e => {
                print("Error input invalid - enter IP or Hostname")
                process.exit();
            })
        }
        break
    case "13":
        print(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} Dork Engine script running..`)
        var input_target = prompt(`${chalk.red('[')}${chalk.whiteBright('>')}${chalk.red(']')} ${chalk.green('Dork : ')}`)
        if (input_target == "" || undefined || null) {
            print("Aborted!")
            process.exit();
        } else {
            google({'query': input_target, "disableConsole": true}).then(r => {
                let resdork = ''
                for (let x = 0; x < r.length; x++) {
                    resdork += `${x + 1}. ${r[x].link}\n`
                }
                print(resdork)
                process.exit();
            }).catch(e => {
                print("Error input invalid - enter IP or Hostname")
                process.exit();
            })
        }
        break
    default:
        print("Aborted!")
        process.exit();
}
