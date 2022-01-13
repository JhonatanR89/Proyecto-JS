//-------------------------- se inicializa el calendario ------------------------ 

class  Calendario {
    constructor(id){
        this.cells = []
        this.fechaSeleccionada = null;
        this.elCalendario = document.getElementById(id)
        this.mesactual = moment();
        this.mostrarplatilla();
        this.elGridBody = this.elCalendario.querySelector('.grid__body')
        this.elnombreMes = this.elCalendario.querySelector('.nombreMes');
        this.mostrarCeldas()

    }
    mostrarplatilla(){
        this.elCalendario.innerHTML = this.getmostrarplantilla()
        this.addEventListenerToControls();
    }
    getmostrarplantilla(){
        let plantilla = `<div class="calendarioHeader ">
        <button class="control control--prev"><</button>
        <span class="nombreMes">ce2021</span>
        <button class="control control--next">></button>
      </div>
      <div class="calendarioBody">
        <div class="grid">
          <div class="grid__header">
            <span class="grid__cell grid__cell--gh">Lun</span>
            <span class="grid__cell grid__cell--gh">Mar</span>
            <span class="grid__cell grid__cell--gh">Mie</span>
            <span class="grid__cell grid__cell--gh">Jue</span>
            <span class="grid__cell grid__cell--gh">Vie</span>
            <span class="grid__cell grid__cell--gh">Sab</span>
            <span class="grid__cell grid__cell--gh">Dom</span>
          </div>
          <div class="grid__body">
            
          </div>
        </div>
      </div>`
      return plantilla;
    }
    

    addEventListenerToControls(){
        let Controles = this.elCalendario.querySelectorAll('.control');
        Controles.forEach(elemt => {

            elemt.addEventListener('click', e =>{
                let eltarget = e.target;
                if(eltarget.classList.contains('control--next')){
                    this.cambiaMes(true)
                }else{
                    this.cambiaMes(false)
                    
                }
                this.mostrarCeldas(); 
            })
        })
    }
    
    cambiaMes(siguiente = true){
        if (siguiente){
            this.mesactual.add(1, 'months');
        }else{
            this.mesactual.subtract(1, 'months');
        }

    }

    mostrarCeldas(){
        this.cells = this.generarFecha(this.mesactual)
        
        if (this.cells === null){
            console.error('no es posible general calendario')
            return; 
        }
        this.elGridBody.innerHTML = '';
        let mostrarCeldas = '';
        let claseDesabilitada ='';
        let claseSeleccionada='';

        for (let i = 0; i < this.cells.length; i++){
            claseDesabilitada = '';
            if(!this.cells[i].isInCurrentMonth){
                claseDesabilitada = 'grid__cel--disable';
            }
             
            mostrarCeldas += `            
            <span class="grid__cell grid__cel--gd ${claseDesabilitada}" data-cell-id="${i}">
                ${this.cells[i].date.date()}
            </span>
            `;
        }
        this.elnombreMes.innerHTML = this.mesactual.format('MMMM YYYY');
        this.elGridBody.innerHTML = mostrarCeldas;   
        this.addEventListenerToCells();     
    }
    

    generarFecha(mostrarMes = moment()) {

        if (!moment.isMoment(mostrarMes)){
            return null;
        }
        let iniciarFecha = moment(mostrarMes).startOf('month')
        let finalizarFecha = moment(mostrarMes).endOf('month')

        let cells =[];
        
        while(iniciarFecha.day() !== 1){
            iniciarFecha.subtract(1, 'days');

        }
        while(finalizarFecha.day() !== 0){
            finalizarFecha.add(1, 'days');

        }
        do {
            cells.push({
                date: moment(iniciarFecha),
                isInCurrentMonth: iniciarFecha.month() === mostrarMes.month()
            })
            iniciarFecha.add(1, 'days');
        }while(iniciarFecha.isSameOrBefore(finalizarFecha));
        return cells;
    }
    addEventListenerToCells(){
        let elCells = this.elCalendario.querySelectorAll('.grid__cel--gd');
        elCells.forEach(elemt=>{
            elemt.addEventListener('click', e => {
                let target = e.target;
                if (target.classList.contains('grid__cel--disable') ) {
                    return
                }
                let selectedCell = this.elGridBody.querySelector('.grid__cel--selected')
                if(selectedCell){
                    selectedCell.classList.remove('grid__cel--selected')
                }
                
                target.classList.add('grid__cel--selected')
                this.fechaSeleccionada = this.cells[parseInt(target.dataset.cellId)].date;
                this.elCalendario.dispatchEvent(new Event('change')); 
            })
        })
    }
    
    obtenerCalendario(){
        return this.elCalendario
    }

    value(){
        return this.fechaSeleccionada;
    }
}
let FechaSelecionada;
let calendario = new Calendario ('calendar')
calendario.obtenerCalendario().addEventListener('change', e => {
    FechaSelecionada = calendario.value().format('DD MM YYYY');
    console.log(FechaSelecionada)
    let tituloHorario = document.getElementById('tituloHorario');
    tituloHorario.innerHTML = `<h3>${FechaSelecionada}</h3>`;
    
})







