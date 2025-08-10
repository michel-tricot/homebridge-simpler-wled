import axios from 'axios';

interface Preset {
    n: string;
    ql: string;
  }

export function httpSendData(url: string, method: string, data: object, callback: Function): void {
    const ax: any = axios as any;
    if (method.toLowerCase() == "post") {
        ax.post(String(url), data)
            .then(function (response: any) {
                callback(null, response)
            })
            .catch(function (error: any) {
                callback(error, null)
            });
    } else if (method.toLowerCase() == "get") {
        ax.get(url)
            .then(function (response: any) {
                callback(null, response)
            })
            .catch(function (error: any) {
                callback(error, null)
            })
    }
}
export async function loadPresets(hosts:any): Promise<Array<string>>{
    return new Promise((resolve, reject) => {
        let host:string;
        if(hosts instanceof Array){
            host = hosts[0];
        }else{
            host = hosts;
        }
        httpSendData(`http://${host}/presets.json`, "GET", {}, (error: any, response: any) => {
          if (error || response == null) { return reject(`Error while loading all presets on ${host}`); };
          console.log(`Loaded all presets for ${host}`);
          resolve(response.data);
        })
    });
  }

export async function loadEffects(hosts:any): Promise<Array<string>> {
    return new Promise((resolve, reject) => {
        let host:string;
        if(hosts instanceof Array){
            host = hosts[0];
        }else{
            host = hosts;
        }
        httpSendData(`http://${host}/json/effects`, "GET", {}, (error: any, response: any) => {
          if (error || response == null) { return reject(`Error while loading all effects on ${host}`); };
          console.log(`Loaded all effects for ${host}`);
          resolve(response.data);
        })
    });
  }

