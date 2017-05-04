import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
  selector: 'page-novo-contato',
  templateUrl: 'novo-contato.html',
  providers: [Contacts]
})
export class NovoContatoPage {

    novoContato = {
        primeiroNome: '',
        sobrenome: '',
        telefone: '',
        tipoTelefone: ''
    }

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public contacts: Contacts,
        public alertCtrl: AlertController
    ) { }

    public salvarContato():void {
        let contato: Contact = this.contacts.create();
        contato.name = new ContactName(null, this.novoContato.sobrenome, this.novoContato.primeiroNome);
        contato.phoneNumbers = [new ContactField(this.novoContato.tipoTelefone, this.novoContato.telefone)];
        contato.save().then(
          () => {
            let alert = this.alertCtrl.create({
                title: 'Novo contato',
                subTitle: 'Contato salvo com sucesso!',
                buttons: [{
                    text: 'Voltar',
                    handler: data => {
                        this.navParams.get('parentPage').buscarContato(null, true);
                        this.navCtrl.pop();
                    }
                }]
            });
            alert.present();
        },
          (error: any) => alert('Erro ao salvar contato: ' + error)
        );
    }
}
