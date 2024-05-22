export function hasCamera(){
    return navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function';
}
