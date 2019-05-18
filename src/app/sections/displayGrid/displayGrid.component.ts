import {ChangeDetectionStrategy, Component, ViewChild, ElementRef, OnInit, ViewEncapsulation, Output, Input, EventEmitter} from '@angular/core';
import {DisplayGrid, GridsterConfig, GridsterItem, GridType} from 'angular-gridster2';
import { Observable, Subject, of } from 'rxjs';  


import { isPlatformBrowser } from '@angular/common';
import { debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import * as jsPDF from 'jspdf';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';
//import { format } from 'path';

declare var $:any;



@Component({
  selector: 'app-display-grid',
  templateUrl: './displayGrid.component.html',
  styleUrls:['./displayGrid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class DisplayGridComponent implements OnInit {
  
  emp = [];
  constructor (private httpService: HttpClient) { }
  vehicleData: any[];
  @ViewChild('content') content: ElementRef;
  @ViewChild('txtNames') txtNames: ElementRef;
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  
  ngOnInit(){ 


    
    
   
   
   
   
   
   
   
   
  





    this.httpService.get('./assets/PartDetails.json').subscribe(
      data => {
        this.vehicleData = data as string [];	 
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    
    $(document).ready(function(){
      
      $('#result').hide();
	
      $('#txtNames').keyup(function(){
        console.log('hai');
        if($('#result').val().length == 0)
        {
          $('#result').hide();
        }
          
        $('#result').show();
       
        $('#result').html('');
        var searchField = $('#txtNames').val();
        var expression = new RegExp(searchField,"i");
        $.getJSON('assets/images/data.json',function(data){
        $.each(data, function(key, value){
    if(value.Name.search(expression) != -1  ||  value.Image.search(expression) != -1  ||   value.Location.search(expression) != -1)
        {
    $('#result').append('<br/><br/><li><img src="'+value.Image + '" height="40" width="40" /><br/><span>'+ value.Name+'</span><br/><span>' + value.Location + '</span></li>');
        }
    
    });
    });
      });
     












      var datatat = [{Name:'Mark',LifeCycleState:'Working',Number:1001,Version:2.02},
    {Name:'Tedd',LifeCycleState:'Not Working',Number:1002,Version:1.20},
    {Name:'Tom',LifeCycleState:'Not Working',Number:1003,Version:4.02},
    {Name:'Williams',LifeCycleState:'Working',Number:1004,Version:3.12},
    {Name:'Samuel',LifeCycleState:'Not Working',Number:1005,Version:8.26}
  ];
    localStorage.setItem("JSData",JSON.stringify(datatat));
    $('#btnSearch').click(function(){
              


      });
      });
    
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.None,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };

    this.dashboard = [
     {cols: 9, rows: 2, y: 0, x: 1},
     {cols: 1, rows: 12, y: 2, x: 0}
    ];
  }
 
  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }
  onClickMe()
  {
   /* this.dashboard = 
    [{cols: 6, rows: 6, y: 10, x: 10}];
    */
  // setTimeout("txtNames.focus();",0);
   this.dashboard.push({cols: 5, rows: 12, y: 2, x: 3, minItemRows:8, minItemCols:5});
    //$('#btnSearch').off('click');
    //(<HTMLInputElement>document.getElementById("txtNames")).focus();
   // alert((<HTMLInputElement>document.getElementById("txtNames")).value);
    
     // var txtNames = (<HTMLInputElement>document.getElementById("txtNames")).value;
     
     
  }








  onClickSearch()
  {
    var _txtNames = (<HTMLInputElement>document.getElementById("txtNames")).value;
    var _txtNumbers = (<HTMLInputElement>document.getElementById("txtNumbers")).value;
    var _txtLifes = (<HTMLInputElement>document.getElementById("txtLifes")).value;
    var _txtSources = (<HTMLInputElement>document.getElementById("txtSources")).value;
    
   // alert(_txtNames);


   //var empId = $('#txtNames').val();

   
   $.getJSON('assets/data/jsondata.json',function(data){
    console.log(data);
    var output = '<ul>';  
    $.each(data, function(key,val){
      output += '<li>'+ val.Name + " " + val.Number+" "+ val.LifeCycleState + " " + val.Source + '</li>';
    });
    output += '</ul>';
    $('#update').html(output);
    });

    
    


    



  }
  



 public onClickPdf()
  {
    alert("data");
    let doc = new jsPDF();
let specialElementHandlers ={
'#editor': function(element, renderer)
{
return true;
}
};
let content = this.content.nativeElement;

doc.fromHTML(content.innerHTML,15,15,{
'width':190,
'elementHandlers': specialElementHandlers
});

doc.save('test.pdf');

  }
}
