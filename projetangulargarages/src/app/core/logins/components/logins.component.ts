import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { LoginsService } from '../service/logins.service';
import { Utilisateur } from '../../interfaces/utilisateur';
import { Router } from '@angular/router';



@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {
  
  errorMessage: string;

  loginForm: FormGroup;

  userValidateur= new FormControl('', Validators.required);
  passwordValidateur= new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder,
              private serviceLogin: LoginsService,
              private route: Router) { }

  ngOnInit() {
    this.initForm();
    this.errorMessage = '';
    
  }
  
  initForm(){
    this.loginForm = this.formBuilder.group({
      userValidateur:this.userValidateur,
      passwordValidateur: this.passwordValidateur
    })
  }

  onSubmit(){
    this.serviceLogin.auth(this.loginForm.value.userValidateur, this.loginForm.value.passwordValidateur).then(
      (user: Utilisateur) =>{
        
        if(user === null){
          this.errorMessage = 'Utilisateur non trouvé : Veuillez vérifier vos identifiants '
        }else{
          switch (user.roles[0].fonction) {
            case 'MECANICIEN':
              this.route.navigate(['/mecanicien']);
              break;
            
            case 'COMMERCIAL':
              this.route.navigate(['/commercial']);
              break;
            
          
            default:
              this.errorMessage = 'Utilisateur non trouvé : Veuillez vérifier vos identifiants '
              break;
          }
        }
      }, 
      (error) => {
        console.log(error);
      }

    )

  }

}
