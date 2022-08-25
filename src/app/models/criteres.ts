import { Categoriesprojet } from "./categoriesprojet";
import { NatureCritere } from "./nature-critere";
import { TypeCritere } from "./type-critere";

export class Criteres {

    criteresId :number;
	cahierClausesAdministrativesId:number;
 criteres: Criteres;
	   typecritere:TypeCritere;
	 naturecritere:NatureCritere;
  criteresLibelle:String;
 criteresAbreviation:String;
  criteresElimination:boolean;
	  criteresDescription:String;
	  categoriesprojet:Categoriesprojet;
}
