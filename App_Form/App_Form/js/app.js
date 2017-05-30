  var app = angular.module('DynamicFormApp', []);

  app.controller('DynamicFormController', function($scope, $log) {

      // we would get this from the api
      $scope.entity = {
          "questionare_guid": "adfs-23ds-33fs-fsaf-999999a",
          "questionare_created": "20160103",
          "questionare_created_by": "JRD",
          "question_List": [
          {
              "question_sectoin_guid": "adfs-23ds-33fs-fsaf-999999a",
              "question_section": "Application Information",
              "questions": [{
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Contact Information",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "InputFields",
                  "input": [{
                      "fieldname": "CADB Administrator (Primary Contact)",
                      "fieldtype": "text",
                      "fieldsize": "50",
                      "validator": "required"
                  }, {
                      "fieldname": "Address",
                      "fieldtype": "text",
                      "fieldsize": "50",
                      "validator": "required"
                  },
                  {
                      "fieldname": "City",
                      "fieldtype": "text",
                      "fieldsize": "50",
                      "validator": "required"
                  }, {
                      "fieldname": "State",
                      "fieldtype": "text",
                      "fieldsize": "2",
                      "validator": "required"
                  },
                  {
                      "fieldname": "Zip Code",
                      "fieldtype": "text",
                      "fieldsize": "5",
                      "validator": "required"
                  },{
                      "fieldname": "Email",
                      "fieldtype": "text",
                      "fieldsize": "50",
                      "validator": "required"
                  }]
              }, {
                  "id": "agricultural",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Agricultural Development Areas:",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "dependent_question": [{
                      "dependent_on": "agricultural",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "Is the county requesting",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "checkList",
                      "checkList": [{
                          "fieldname": "A copy of the adopted. Criteria for ",
                          "fieldtype": "checkbox",
                          "validator": "required"
                      }, {
                          "fieldname": "A copy of the CADB resolution",
                          "fieldtype": "checkbox",
                          "validator": "required"
                      }, {
                          "fieldname": "justification that the ",
                          "fieldtype": "checkbox",
                          "validator": "required"
                      }]
                  }]
              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Project Areas:",
                  "question_text": "For each project",
                  "question_help_text": "Add additional rows as needed",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "table",
                  "tableHeader": [{
                      "name": "Project Area"
                  }, {
                      "name": "Project Area Aggregate Size(Acres)"
                  }, {
                      "name": "Project Area Density(%)"
                  }, {
                      "name": "Total # Of Targeted Farms"
                  }, {
                      "name": "Total Acreage of Targeted Farms"
                  }, {
                      "name": "Targeted Farms Soil Productivity(%)"
                  }, {
                      "name": "Total Estimated Cost For Targeted Farms Easement Purchase"
                  }],
                  "tableData": [{
                      "name": ""
                  }, {
                      "name": ""
                  }, {
                      "name": ""
                  }, {
                      "name": ""
                  }, {
                      "name": ""
                  }]
              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Project Areas Totals:",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "table",
                  "tableHeader": [{
                      "name": "Total # Of Targeted Farms"
                  }, {
                      "name": "Total Acreage of Targeted Farms"
                  }, {
                      "name": "Targeted Farms Soil Productivity(%)"
                  }, {
                      "name": "Total Estimated Cost For Targeted Farms Easement Purchase"
                  }],
                  "tableData": [{
                      "name": ""
                  }]
              }]
            },
          {
              "question_sectoin_guid": "adfs-23ds-33fs-fsaf-999999a",
              "question_section": "County Policy Information:",
              "question_section_help_text": "If the answer is YES to the following.......................",
              "questions": [{
                  "id": "County",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Minimum Eligibilty Criteria:",
                  "question_text": "Does the county have the minimmum eligibilty ",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [
                    {
                      "type": 'radio',
                      "typeValue": 'Yes'
                    },
                    {
                      "type": 'radio',
                      "typeValue": 'No'
                    }
                  ],
                  "dependent_question": [{
                      "dependent_on": "County",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "Is the county not requesting",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [
                        {
                          "type": 'radio',
                          "typeValue": 'Yes'
                        },
                        {
                          "type": 'radio',
                          "typeValue": 'No'
                        }
                      ]
                  }]
              }, {
                  "id": "County",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "County Ranking Criteria:",
                  "question_text": "Does the county ",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [
                    {
                      "type": 'radio',
                      "typeValue": 'Yes'
                    },
                    {
                      "type": 'radio',
                      "typeValue": 'No'
                    }
                  ],
                  "dependent_question": [{
                      "dependent_on": "County",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "Is the county ofcrz requesting",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [
                        {
                          "type": 'radio',
                          "typeValue": 'Yes'
                        },
                        {
                          "type": 'radio',
                          "typeValue": 'No'
                        }
                      ]
                  }]
              }, {
                  "id": "County",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Agricultural Labour Housing",
                  "question_text": "Does the county ",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [
                    {
                      "type": 'radio',
                      "typeValue": 'Yes'
                    },
                    {
                      "type": 'radio',
                      "typeValue": 'No'
                    }
                  ],
                  "dependent_question": [{
                      "dependent_on": "County",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "Is the county requesting",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [
                        {
                          "type": 'radio',
                          "typeValue": 'Yes'
                        },
                        {
                          "type": 'radio',
                          "typeValue": 'No'
                        }
                      ]
                  }]
              },
              {
                  "id": "County",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "House Replacement:",
                  "question_text": "Does the county ",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [
                    {
                      "type": 'radio',
                      "typeValue": 'Yes'
                    },
                    {
                      "type": 'radio',
                      "typeValue": 'No'
                    }
                  ],
                  "dependent_question": [{
                      "dependent_on": "County",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "Is the county requesting",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [
                        {
                          "type": 'radio',
                          "typeValue": 'Yes'
                        },
                        {
                          "type": 'radio',
                          "typeValue": 'No'
                        }
                      ]
                  }]
              },
              {
                  "id": "County",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Residual Dwelling Site Opportunity Allocation:",
                  "question_text": "Does the county ",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [
                    {
                      "type": 'radio',
                      "typeValue": 'Yes'
                    },
                    {
                      "type": 'radio',
                      "typeValue": 'No'
                    }
                  ],
                  "dependent_question": [{
                      "dependent_on": "County",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "Is the county requesting",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [
                        {
                          "type": 'radio',
                          "typeValue": 'Yes'
                        },
                        {
                          "type": 'radio',
                          "typeValue": 'No'
                        }
                      ]
                  }]
              }]
            },
          {
              "question_sectoin_guid": "adfs-23ds-33fs-fsaf-999999a",
              "question_section": "Funding Information:",
              "question_section_help_text": "County Policy Information:",
              "questions": [{
                  "id": "funding",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "County Funding:",
                  "question_text": "Please check all that apply:",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "dependent_question": [{
                      "dependent_on": "funding",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "Is the county requesting",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "checkList",
                      "checkList": [{
                          "fieldname": "A copy of the adopted. Criteria for ",
                          "fieldtype": "checkbox",
                          "validator": "required",
                          "help_text1": "Annual tax",
                          "help_text2": "Annual tax"
                      }, {
                          "fieldname": "A copy of the CADB resolution",
                          "fieldtype": "checkbox",
                          "validator": "required",
                          "help_text1": "Please describe"
                      }, {
                          "fieldname": "justification that the ",
                          "fieldtype": "checkbox",
                          "validator": "required",
                          "help_text1": "Please describe"
                      }]
                  }]
              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Total annual revenue",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "InputFields",
                  "input": [{
                      "fieldname": "CADB Administrator (Primary Contact)",
                      "fieldtype": "text",
                      "fieldsize": "50",
                      "validator": "required"
                  }]
              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Municipal Funding:",
                  "question_text": "For each project",
                  "question_help_text": "Add additional rows as needed",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "table",
                  "tableHeader": [{
                      "name": "Municipality"
                  }, {
                      "name": "Tax Rate per $100"
                  }, {
                      "name": "Annual Revenue Generated"
                  }, {
                      "name": "Annual Revenue Deducted to Farmland Preservation"
                  }, {
                      "name": "Repeated Annual Appropriations"
                  }, {
                      "name": "Repeated Issuance of Bonded Indebtedness "
                  }, {
                      "name": "Revenue from Others Sources"
                  }],
                  "tableData": [{
                      "name": ""
                  }, {
                      "name": ""
                  }, {
                      "name": ""
                  }, {
                      "name": ""
                  }, {
                      "name": ""
                  }]
              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Municipal Funding Totals:",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "table",
                  "tableHeader": [{
                      "name": "Total Annual Revenue Generated"
                  }, {
                      "name": "Total Annual Revenue Deducted to Farmland Preservation"
                  }, {
                      "name": "Total Repeated Annual Appropriations "
                  }, {
                      "name": "Total Issuance of Bonded Indebtedness"
                  }, {
                      "name": "Total Revenue from Others Sources"
                  }],
                  "tableData": [{
                      "name": ""
                  }]
              }]
            }
        ]
      };
      $scope.submitForm = function() {};
  }).directive("dynamicName", function($compile) {
      return {
          restrict: "A",
          terminal: true,
          priority: 1000,
          link: function(scope, element, attrs) {
              element.attr('name', scope.$eval(attrs.dynamicName));
              element.removeAttr("dynamic-name");
              $compile(element)(scope);
          }
      };
  });
