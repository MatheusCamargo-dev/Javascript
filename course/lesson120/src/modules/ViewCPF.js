import CpfValidator from "./CpfValidator";
import CreateCPF from "./CreateCPF";

export default class ViewCPF{
    constructor(){
        this.inputCpf = document.querySelector('#cpf');
        this.btnCpf = document.querySelector('#btn-cpf');
        this.displayCpf = document.querySelector('#cpf-view');
        this.btnCreateCPF = document.querySelector('#btn-create-cpf');
        this.displayCPFGenerator = document.querySelector('#cpf-generator');
    }

    static maskCpf(v){
        v=v.replace(/\D/g,"")                    
        v=v.replace(/(\d{3})(\d)/,"$1.$2")      
        v=v.replace(/(\d{3})(\d)/,"$1.$2")      
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") 
        return v
    }

    displaySuccess(){
        this.displayCpf.className = 'text-success'
        this.displayCpf.innerHTML = 'CPF VALID!'
    }

    displayInvalid(){
        this.displayCpf.className = 'text-danger'
        this.displayCpf.innerHTML = 'CPF INVALID!'
    }

    init(){

        this.inputCpf.addEventListener('blur', e => {
            this.inputCpf.value = ViewCPF.maskCpf(this.inputCpf.value)
        })

        this.inputCpf.addEventListener('keypress', e => {
            this.inputCpf.value = ViewCPF.maskCpf(this.inputCpf.value)
            if(e.keyCode === 13){
                let cpf = new CpfValidator(this.inputCpf.value)
                cpf.valid() ? this.displaySuccess() : this.displayInvalid();
            }
        });      

        this.btnCpf.addEventListener('click', e => {
            let cpf = new CpfValidator(this.inputCpf.value)
            cpf.valid() ? this.displaySuccess() : this.displayInvalid();     
        })

        this.btnCreateCPF.addEventListener('click', () => {
            let cpf = CreateCPF.build();
            cpf = ViewCPF.maskCpf(cpf);
            this.displayCPFGenerator.innerHTML = cpf;
        })

    }
}