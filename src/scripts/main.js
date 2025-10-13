AOS.init();

const dataDoEvento = new Date("Dec 12 2025 19:00:00"); 
const timeStampdoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    
    const distanciaAteOEvento = timeStampdoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.querySelector('#contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    document.querySelector('#comecarFinalizou').innerHTML = "começa em ";

    if(distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.querySelector('#contador').innerHTML = " ";
        document.querySelector('#comecarFinalizou').innerHTML = "já foi finalizado.";
    }

}, 1000);