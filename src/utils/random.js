export default function generateRandomKey(){
    return Math.round(((Math.random() * 15485863)/17)*1735);
}