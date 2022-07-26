
import { Component, OnInit, Output, ViewChild ,EventEmitter} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Cahiercharges } from 'src/app/models/cahiercharges';
import { Cahierclausemodel } from 'src/app/models/cahierclausemodel';
import { Cahierclausesadministratives } from 'src/app/models/cahierclausesadministratives';
import { Cahierclausesfinancierestechniques } from 'src/app/models/cahierclausesfinancierestechniques';
import { Typecahiercharges } from 'src/app/models/typecahiercharges';
import { CahierchargesService } from 'src/app/services/cahiercharges/cahiercharges.service';
import { CahierclausesadministrativesService } from 'src/app/services/cahierclausesadministratives/cahierclausesadministratives.service';
import { CahierclausesfinancierestechniquesService } from 'src/app/services/cahierclausesfinancierestechniques/cahierclausesfinancierestechniques.service';
import { CategoriesprojetService } from 'src/app/services/categoriesprojet/categoriesprojet.service';
import { TypecahierchargesService } from 'src/app/services/typecahiercharges/typecahiercharges.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-cahiercharges-view-one',
  templateUrl: './cahiercharges-view-one.component.html',
  styleUrls: ['./cahiercharges-view-one.component.css']
})
export class CahierchargesViewOneComponent implements OnInit {
  etatFinenciere:boolean=false;
  etatAdmin:boolean=false;
  c= new Cahiercharges();
  t= new Typecahiercharges();
  cc= new Cahierclausesadministratives();
  b=new Cahierclausesfinancierestechniques();
  bb:any[];
  listTypeCahierCharge:Typecahiercharges[];
    
  id:number;
  title="pagination";
  page : number=1;
  count : number = 0;
  tableSize: number =10;
  tableSizes : any=['ALL',5 ,10 ,15 ,20];
  L: any = [];
  d:any[];
  list:any[];
  listt:any[];
idd:any;
 
  cahiercharges: Cahiercharges[];
  cahierclausesAdministratives: Cahierclausesadministratives[];
  displayedColumns= [ 'cahierClausesAdministrativesId','cahierClausesAdministrativesLibelle','cahierClausesAdministrativeDescription','typecahiercharges','categoriesprojet','Operations']
  dataSource !:MatTableDataSource<any>;
  displayedColumns1= [ 'cahierClausesFinancieresTechniquesId','cahierDesClauseFinancierTechnqueLibelle','cahierClausesFinancieresTechniquesDescription','typecahiercharges','categoriesprojet','Operations']
  dataSource1 !:MatTableDataSource<any>;
  @ViewChild('paginator') paginator! :MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;
  clauseAdmin1=new Cahierclausesadministratives();
  l:any=[];
 etat:boolean;
  constructor(private cahierchargesService : CahierchargesService,private typeCahierChargeService: TypecahierchargesService,private cahierclausesadministrativesService :CahierclausesadministrativesService,private cahierclausesfinancierestechniquesService: CahierclausesfinancierestechniquesService,private categorieProjetService : CategoriesprojetService,private router: Router, private activated:ActivatedRoute) { }
 
  ajouter(){
    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        console.log("===========>"+id)
        this.cahierchargesService.getOnecahiercharges(id).subscribe(
          d=>{
            this.c=d;
            console.log("aaaaaaaaaaaa "+this.c.cahierChargesDescription)
            
    console.log("=====================>"+this.c.cahierChargesId)
            }
        )  
      }
      
    );

    this.cahierchargesService.afficherclauserestant(this.c.cahierChargesId).subscribe((response:any)=>{
      
      this.listTypeCahierCharge=response
      console.log("message"+this.listTypeCahierCharge)
      let length = Object.keys(this.listTypeCahierCharge).length;
      if(Object.keys(this.listTypeCahierCharge).length==0 ){
        console.log("non ") 
       
        swal({
          text: "Tous les cahiers des clauses de ce cahier des charges sont crées !",
         
          icon: "warning",
        
          dangerMode: true,
        })
        this.router.navigate(['/home/CahiersdeChargeList',this.c.cahierChargesId])
         
      }
      else{
        this.router.navigate(['/home/ajouterClause',this.c.cahierChargesId])
      
        console.log("oui ")
       
      }
  });
    
   
      }


      
  ngOnInit(): void {
    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        console.log("===========>"+id)
        this.cahierchargesService.getOnecahiercharges(id).subscribe(
          d=>{
            this.c=d;
            console.log("aaaaaaaaaaaa "+this.c.cahierChargesDescription)
            
    console.log("=====================>"+this.c.cahierChargesId)
            }
        )  
      }
      
    );

    console.log("=====================>"+this.c.cahierChargesId)
   
    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
    this.cahierclausesadministrativesService.getAllcahierclausesadministratives1(id).subscribe((response:any)=>{
     
     this.dataSource=new MatTableDataSource(response);
      console.log(response);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.matSort;
      this.dataSource1=new MatTableDataSource(response);
      console.log(response);
      this.dataSource1.paginator= this.paginator;
      this.dataSource1.sort= this.matSort;

  });
}
);  }

  filterData ($event:any) {
    this.dataSource.filter=$event.target.value;

  }

 
   // Delete 
   deletee(cl:Cahierclausemodel,id:number) {
    
    swal({
      title: "Etes-vous sûr de vouloir supprimer cet enregistrement?",
     
      icon: "warning",
      buttons: ["NON","OUI"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          let i =this.L.indexOf(cl)
          if(cl.typecahiercharges.typeCahierChargesLibelle=="CCAG" || cl.typecahiercharges.typeCahierChargesLibelle=="CPS" || cl.typecahiercharges.typeCahierChargesLibelle=="CCAP")
           {
          this.cahierchargesService.deletecahiercharges(cl.cahierClausesAdministrativesId).subscribe(  
            ()=>{this.L.splice(i,1);          
                  this.ngOnInit();
              });;
        } 
      
      else
      {
        this.cahierchargesService.deletecahiercharges(cl.cahierClausesFinancieresTechniquesId).subscribe(  
          ()=>{this.L.splice(i,1);          
                this.ngOnInit();
            });;
      } 
    }}  
  );
 
  } 
  

  checkClause(clause:Cahierclausemodel){
    console.log(clause)
    if(clause.typecahiercharges.typeCahierChargesLibelle=="CCAG" || clause.typecahiercharges.typeCahierChargesLibelle=="CPS" || clause.typecahiercharges.typeCahierChargesLibelle=="CCAP") {
     
      this.router.navigate(['/home/CritereList',{idch:this.c.cahierChargesId,idType:this.t.typeCahierChargesId,idClause:clause.cahierClausesAdministrativesId,idCriter:clause.criteresId,CritereAdmin:true}]);
    }
    else{
      this.router.navigate(['/home/CritereFinanciereList',{idch:this.c.cahierChargesId,idType:this.t.typeCahierChargesId,idClause:clause.cahierClausesFinancieresTechniquesId,idCriter:clause.criteresId,CritereFinan:true}]);
   
    }

  }


  checkClause1(clause1:Cahierclausemodel){
    console.log("*************************************************"+clause1)
    if(clause1.typecahiercharges.typeCahierChargesLibelle=="CCAG" || clause1.typecahiercharges.typeCahierChargesLibelle=="CPS" || clause1.typecahiercharges.typeCahierChargesLibelle=="CCAP") {
     
      //this.etatAdmin=true
      this.router.navigate(['/home/modifierClause/'+clause1.cahierClausesAdministrativesId,{idch:this.c.cahierChargesId,idType:this.t.typeCahierChargesId,idClause:clause1.cahierClausesAdministrativesId,idCriter:clause1.criteresId,CritereAdmin:true }]);
    }
    else{
    //this.etatFinenciere=true
      //this.etatAdmin=false
      this.router.navigate(['/home/modifierClauseFinanciere/'+clause1.cahierClausesFinancieresTechniquesId,{idch:this.c.cahierChargesId,idType:this.t.typeCahierChargesId,idClause:clause1.cahierClausesFinancieresTechniquesId,idCriter:clause1.criteresId,CritereFinan:true }]);
   
    }

  }
  deleteee( clause1111:Cahierclausemodel) {
     
   
    
        swal({
          title: "Etes-vous sûr de vouloir supprimer cet enregistrement?",
         
          icon: "warning",
          buttons: ["NON","OUI"],
          dangerMode: true,
        })
          .then((willDelete) => {
    
            if (willDelete) {
              let i =this.L.indexOf(clause1111)
              if(clause1111.typecahiercharges.typeCahierChargesLibelle=="CCAG" || clause1111.typecahiercharges.typeCahierChargesLibelle=="CPS" || clause1111.typecahiercharges.typeCahierChargesLibelle=="CCAP")
               {
              this.cahierclausesadministrativesService.deleteClauseAdmin(clause1111.cahierClausesAdministrativesId).subscribe(  
                ()=>{this.L.splice(i,1);          
                      this.ngOnInit();
                  });;
            } 
          
          else
          {
            this.cahierclausesfinancierestechniquesService.deleteClauseFinanc(clause1111.cahierClausesFinancieresTechniquesId).subscribe(  
              ()=>{this.L.splice(i,1);          
                    this.ngOnInit();
                });;
          } 
        }}  
      );
     
      }
     
    


   
 
      generer(){
        this.activated.paramMap.subscribe(
          d=>{
            let id =Number(d.get('id'));
            console.log("===========>"+id)
            this.cahierchargesService.getOnecahiercharges(id).subscribe(
              d=>{
                this.c=d;
                console.log("aaaaaaaaaaaa "+this.c.cahierChargesDescription)
                
        console.log("=====================>"+this.c.cahierChargesId)
                }
            )  
          }
          
        );
        this.c.categoriesprojet=this.c.categoriesprojet
        this.cahierchargesService.genererClause(this.c.cahierChargesId).subscribe((response:any)=>{
          this.ngOnInit();
        });
       
   console.log("****************")
      }
}
