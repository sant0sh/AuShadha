function patientContextTabSetup(){
require(
  ["dijit/registry",
   "dojo/parser",
   "dijit/layout/TabContainer",
   "dojox/layout/ContentPane",
   "dojo/dom",
   "dojo/dom-construct",
   "dojo/dom-style",
   "dojo/ready"
  ],
  function(registry,parser, TabContainer, ContentPane, dom, domConstruct, domStyle, ready){

ready( function(){

      domConstruct.create('div', {id: "patientContextTabs"}, 
                            "patientContextContainer", "first"
                            );
      domConstruct.create('div', {id: "patientContactTab"}, "patientContextTabs", "first");
        domConstruct.create('div', {id: "contact_list"}, "patientContactTab", "first");
        domConstruct.create('div', {id: "phone_list"}, "patientContactTab", "last");

      domConstruct.create('div', {id: "patientHistoryTab"}, "patientContextTabs", "last");
        domConstruct.create('div', {id: "patientDemographicsTab"}, "patientHistoryTab", "first");
          domConstruct.create('div', {id: "demographics_add_or_edit_form"}, "patientDemographicsTab", "first");
          domConstruct.create('div', {id: "guardian_list"}, "patientDemographicsTab", "last");
        domConstruct.create('div', {id: "patientSocialHistoryTab"}, "patientHistoryTab", "last");
        domConstruct.create('div', {id: "patientFamilyHistoryTab"}, "patientHistoryTab", "last");
          domConstruct.create('div', {id: "family_history_list"}, "patientFamilyHistoryTab", "first");
        domConstruct.create('div', {id: "patientMedicalAndSurgicalHistoryTab"}, "patientHistoryTab", "last");
          domConstruct.create('div', {id: "medical_and_surgical_history_list"}, "patientMedicalAndSurgicalHistoryTab", "first");

      domConstruct.create('div', {id: "patientPreventiveHealthTab"}, "patientContextTabs", "last");
          domConstruct.create('div', {id: "neonatal_and_paediatric_exam_list"}, "patientPreventiveHealthTab", "first");
          domConstruct.create('div', {id: "immunisation_list"}, "patientPreventiveHealthTab", "last");
          domConstruct.create('div', {id: "obstetrics_preventives_list"}, "patientPreventiveHealthTab", "last");
          domConstruct.create('div', {id: "gynaecology_preventives_list"}, "patientPreventiveHealthTab", "last");
          domConstruct.create('div', {id: "medical_preventives_list"}, "patientPreventiveHealthTab", "last");

      domConstruct.create('div', {id: "patientMedicationListAndAllergiesTab"}, "patientContextTabs", "last");
          domConstruct.create('div', {id: "medication_list"}, "patientMedicationListAndAllergiesTab", "first");
          domConstruct.create('div', {id: "allergy_list"}, "patientMedicationListAndAllergiesTab", "last");

      domConstruct.create('div', {id: "patientAdmissionAndVisitsTab"}, "patientContextTabs", "last");
          domConstruct.create('div', {id: "admission_list"}, "patientAdmissionAndVisitsTab", "first");
          domConstruct.create('div', {id: "visit_list"}, "patientAdmissionAndVisitsTab", "last");

      domConstruct.create('div', {id: "patientMediaTab"}, "patientContextTabs", "last");
          domConstruct.create('div', {id: "patient_media_list"}, "patientMediaTab", "first");


      var mainContainer = new ContentPane({id     : "patientContextContainer",
                                           region  : "bottom",
                                           style :"min-height: 550px; overflow:auto;"
                                          }, 
                                          "patientContextContainer"
                                        );
      console.log(mainContainer);

      var tabs = new TabContainer({ 
                                    id: "patientContextTabs",
                                    tabPosition:"top",
                                    tabStrip:true,
                                    style : "min-height: 550px;overflow:auto;"
                                   },
                                   "patientContextTabs"
                                  );

//      mainContainer.startup();

      var contactTab = new ContentPane({id:"patientContactTab",
                                         title:"Contact"
                                        },
                                        "patientContactTab"
                                        );
      var historyTab = new ContentPane({id:"patientHistoryTab",
                                         title:"History"
                                        },
                                        "patientHistoryTab"
                                        );
      var preventiveHealthTab = new ContentPane({id:"patientPreventiveHealthTab",
                                                 title:"Preventive Health"
                                                },
                                                "patientPreventiveHealthTab"
                                                );
      var medicationAndAllergiesTab = new ContentPane({id:"patientMedicationListAndAllergiesTab",
                                                       title:"Medications & Allergies"
                                                      },
                                                      "patientMedicationListAndAllergiesTab"
                                                      );
      var admissionAndVisitTab      = new ContentPane({id:"patientAdmissionAndVisitsTab",
                                                       title:"Admissions & Visits"
                                                      },
                                                      "patientAdmissionAndVisitsTab"
                                                      );
      var mediaTab                 = new ContentPane({id:"patientMediaTab",
                                                       title:"Media"
                                                      },
                                                      "patientMediaTab"
                                                      );
     tabs.addChild(contactTab);
     tabs.addChild(historyTab);
     tabs.addChild(preventiveHealthTab);
     tabs.addChild(medicationAndAllergiesTab);
     tabs.addChild(admissionAndVisitTab);
     tabs.addChild(mediaTab);

     mainContainer.startup();
     tabs.startup();

    registry.byId("centerMainPane").resize();

   });
});

}

patientContextTabSetup();
