let dates = {};

function pushDates () {
    for (let i in customers){    
        if (customers[i].ListOfPeriods.includes('-')){
            let a = customers[i].ListOfPeriods.split('-');
            dates.push(customers[i].key={});        
            dates.customers[i].startDate.push(a[0]);
            dates.customers[i].endDate.push(a[1]);
        }
        else if (customers[i].ListOfPeriods.includes('|')) {
            dates.push(customers[i].key={});
            let a = customers[i].ListOfPeriods.split('|');
            let b = a.split('-')       
            dates.customers[i].startDate.push(b[0]);
            dates.customers[i].startDate.push(b[1]);
            dates.customers[i].startDate.push(b[2]);
            dates.customers[i].startDate.push(b[3]);
        }
        else if (customers[i].ListOfPeriods == 'null'){
            dates.push(customers[i].key={});
            dates.customers[i].startDate.ListOfPeriods == 'null';
        }
        else if (customers[i].ListOfPeriods == 'undefined'){
            dates.push(customers[i].key={});
            dates.customers[i].startDate.ListOfPeriods == 'keine Property "ListOfPeriods"';
        }
        else {
            dates.push(customers[i].key={});
            dates.customers[i].startDate.ListOfPeriods == 'undefined';
        }
    }
}

const customers = { 
example1Customer : {
        CustomerNumber: "KN15000016",
        Identifiernumber: "NULL",
        IdentifierBlocked: "0",
        Gender: "M",
        Firstname: "Kunde",
        Lastname: "Musterkunde",
        Company: "NULL",
        Birthdate: "17.10.1990",
        EMail: "musterkunde@micromerce.com",
        Mobile: "123456789",
        Extension: "NULL",
        Street: "Straße",
        Housenumber: "56",
        ZIP: "12345",
        City: "Micromercestadt",
        Country: "DE",
        ConsumptionAmountVending: ".00",
        ConsumptionAmountBonus: ".00",
        Payoption: "directdebit",
        Paymode: "per month",
        Accountholder: "Musterkunde",
        IBAN: "123456",
        BIC: "NOLA2dfg34JF",
        Bankname: "Micromercebank",
        Mandatereference: "KJHSDsdfgF2357",
        MandateSigendate: "13.09.2017",
        DirectDebitDay: "1.0",
        BlockDirectDebit: "NULL",
        BlockDunning: "NULL",
        Contractnumber: "15000017",
        ContractType: "M",
        ContractStatus: "I",
        Date_Start_Contract: "01.10.2017",
        Date_Sign_Contract: "03.08.2017",
        Date_Start_Training: "02.09.2017",
        Termination_Received_Date: "10.04.2019",
        Termination_Reason: "Keine Angabe",
        Termination_Date: "30.09.2019",
        Next_Termination_Deadline: "2019-06-30",
        Next_Termination_Date: "2019-09-30",
        ModelId: "2",
        Modelname: "Abo 24 Monate + Getränke",
        ModelPeriodType: "Month",
        ModelPeriodInit: "24",
        ModelPeriodExtension: "12",
        Initial_Termination_Period_Type: "Month",
        Initial_Termination_Period_Count: "3",
        Extension_Termination_Period_Type: "Month",
        Extension_Termination_Period_Count: "3",
        ListOfPeriods: "   15.03.2017 - 01.05.2017",
        OpenCredits: ".00",
        OpenDebts: ".00",
        AdditionalFields: "NULL",
        PersonMarketingEmail: "NULL",
        PersonMarketingAddress: "NULL",
        PersonMarketingMobileCall: "NULL",
        PersonMarketingMobileMessenger: "NULL",
        PersonMarketingPhoneCall: "NULL"
    },
example2Customer : {
        CustomerNumber: "KN15000016",
        Identifiernumber: "NULL",
        IdentifierBlocked: "0",
        Gender: "M",
        Firstname: "Kunde",
        Lastname: "Musterkunde",
        Company: "NULL",
        Birthdate: "17.10.1990",
        EMail: "musterkunde@micromerce.com",
        Mobile: "123456789",
        Extension: "NULL",
        Street: "Straße",
        Housenumber: "56",
        ZIP: "12345",
        City: "Micromercestadt",
        Country: "DE",
        ConsumptionAmountVending: ".00",
        ConsumptionAmountBonus: ".00",
        Payoption: "directdebit",
        Paymode: "per month",
        Accountholder: "Musterkunde",
        IBAN: "123456",
        BIC: "NOLA2dfg34JF",
        Bankname: "Micromercebank",
        Mandatereference: "KJHSDsdfgF2357",
        MandateSigendate: "13.09.2017",
        DirectDebitDay: "1.0",
        BlockDirectDebit: "NULL",
        BlockDunning: "NULL",
        Contractnumber: "15000017",
        ContractType: "M",
        ContractStatus: "I",
        Date_Start_Contract: "01.10.2017",
        Date_Sign_Contract: "03.08.2017",
        Date_Start_Training: "02.09.2017",
        Termination_Received_Date: "10.04.2019",
        Termination_Reason: "Keine Angabe",
        Termination_Date: "30.09.2019",
        Next_Termination_Deadline: "2019-06-30",
        Next_Termination_Date: "2019-09-30",
        ModelId: "2",
        Modelname: "Abo 24 Monate + Getränke",
        ModelPeriodType: "Month",
        ModelPeriodInit: "24",
        ModelPeriodExtension: "12",
        Initial_Termination_Period_Type: "Month",
        Initial_Termination_Period_Count: "3",
        Extension_Termination_Period_Type: "Month",
        Extension_Termination_Period_Count: "3",
        ListOfPeriods: "12.06.2008- 11.07.2008|12.08.2008 - 11.11.2008",
        OpenCredits: ".00",
        OpenDebts: ".00",
        AdditionalFields: "NULL",
        PersonMarketingAddress: "NULL",
        PersonMarketingMobileCall: "NULL",
        PersonMarketingMobileMessenger: "NULL",
        PersonMarketingPhoneCall: "NULL"
    },
example3Customer : {
        CustomerNumber: "KN15000016",
        Identifiernumber: "NULL",
        IdentifierBlocked: "0",
        Gender: "M",
        Firstname: "Kunde",
        Lastname: "Musterkunde",
        Company: "NULL",
        Birthdate: "17.10.1990",
        EMail: "musterkunde@micromerce.com",
        Mobile: "123456789",
        Extension: "NULL",
        Street: "Straße",
        Housenumber: "56",
        ZIP: "12345",
        City: "Micromercestadt",
        Country: "DE",
        ConsumptionAmountVending: ".00",
        ConsumptionAmountBonus: ".00",
        Payoption: "directdebit",
        Paymode: "per month",
        Accountholder: "Musterkunde",
        IBAN: "123456",
        BIC: "NOLA2dfg34JF",
        Bankname: "Micromercebank",
        Mandatereference: "KJHSDsdfgF2357",
        MandateSigendate: "13.09.2017",
        DirectDebitDay: "1.0",
        BlockDirectDebit: "NULL",
        BlockDunning: "NULL",
        Contractnumber: "15000017",
        ContractType: "M",
        ContractStatus: "I",
        Date_Start_Contract: "01.10.2017",
        Date_Sign_Contract: "03.08.2017",
        Date_Start_Training: "02.09.2017",
        Termination_Received_Date: "10.04.2019",
        Termination_Reason: "Keine Angabe",
        Termination_Date: "30.09.2019",
        Next_Termination_Deadline: "2019-06-30",
        Next_Termination_Date: "2019-09-30",
        ModelId: "2",
        Modelname: "Abo 24 Monate + Getränke",
        ModelPeriodType: "Month",
        ModelPeriodInit: "24",
        ModelPeriodExtension: "12",
        Initial_Termination_Period_Type: "Month",
        Initial_Termination_Period_Count: "3",
        Extension_Termination_Period_Type: "Month",
        Extension_Termination_Period_Count: "3",
        ListOfPeriods: "NULL",
        OpenCredits: ".00",
        OpenDebts: ".00",
        AdditionalFields: "NULL",
        PersonMarketingEmail: "NULL",
        PersonMarketingAddress: "NULL",
        PersonMarketingMobileCall: "NULL",
        PersonMarketingMobileMessenger: "NULL",
        PersonMarketingPhoneCall: "NULL"
    },
example4Customer : {
        CustomerNumber: "KN15000016",
        Identifiernumber: "NULL",
        IdentifierBlocked: "0",
        Gender: "M",
        Firstname: "Kunde",
        Lastname: "Musterkunde",
        Company: "NULL",
        Birthdate: "17.10.1990",
        EMail: "musterkunde@micromerce.com",
        Mobile: "123456789",
        Extension: "NULL",
        Street: "Straße",
        Housenumber: "56",
        ZIP: "12345",
        City: "Micromercestadt",
        Country: "DE",
        ConsumptionAmountVending: ".00",
        ConsumptionAmountBonus: ".00",
        Payoption: "directdebit",
        Paymode: "per month",
        Accountholder: "Musterkunde",
        IBAN: "123456",
        BIC: "NOLA2dfg34JF",
        Bankname: "Micromercebank",
        Mandatereference: "KJHSDsdfgF2357",
        MandateSigendate: "13.09.2017",
        DirectDebitDay: "1.0",
        BlockDirectDebit: "NULL",
        BlockDunning: "NULL",
        Contractnumber: "15000017",
        ContractType: "M",
        ContractStatus: "I",
        Date_Start_Contract: "01.10.2017",
        Date_Sign_Contract: "03.08.2017",
        Date_Start_Training: "02.09.2017",
        Termination_Received_Date: "10.04.2019",
        Termination_Reason: "Keine Angabe",
        Termination_Date: "30.09.2019",
        Next_Termination_Deadline: "2019-06-30",
        Next_Termination_Date: "2019-09-30",
        ModelId: "2",
        Modelname: "Abo 24 Monate + Getränke",
        ModelPeriodType: "Month",
        ModelPeriodInit: "24",
        ModelPeriodExtension: "12",
        Initial_Termination_Period_Type: "Month",
        Initial_Termination_Period_Count: "3",
        Extension_Termination_Period_Type: "Month",
        Extension_Termination_Period_Count: "3",
        OpenCredits: ".00",
        OpenDebts: ".00",
        AdditionalFields: "NULL",
        PersonMarketingEmail: "NULL",
        PersonMarketingAddress: "NULL",
        PersonMarketingMobileCall: "NULL",
        PersonMarketingMobileMessenger: "NULL",
        PersonMarketingPhoneCall: "NULL"
    }
}