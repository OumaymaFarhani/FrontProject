import { Cahiercharges } from "./cahiercharges";
import { Categoriesprojet } from "./categoriesprojet";
import { Typecahiercharges } from "./typecahiercharges";

export class Cahierclausemodel {

      //cahierClausesAdministrativesId:number;
      cahierClausesAdministrativesId:number;
      cahierClausesFinancieresTechniquesId:number;
	  categoriesprojet:Categoriesprojet;
        typecahiercharges:Typecahiercharges;
        
        criteresId:number;
   cahiercharges:Cahiercharges;
	  libelle:String ;
	  description:String ;
  CahierClauseAdministrativeReelDateCration:Date;
	  typeCahierChargesId: any;
       cahierChargesId: number;
     categoriesProjetId:any;
     cahierClausesAdministrativesLibelle:String ;
     cahierClausesAdministrativeDescription:String ;
}
