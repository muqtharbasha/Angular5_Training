db.UserRole.aggregate([
    { 
        "$project": {               
            "UserId": 1,
            "RoleIds": { "$ifNull" : [ "$RoleIds", [ ] ] } 
        }
    },
    {
       "$unwind": {
           "path": "$RoleIds",
           "preserveNullAndEmptyArrays": true
        }
    },      
    {
        "$lookup": {
            "from": "Roles",
            "localField": "prescription.drug",
            "foreignField": "_id",
            "as": "prescription.drug"
        }
    },
    { "$unwind": "$prescription.drug" },
    { 
        "$group": {
            "_id": "$_id",
            "patientid" : { "$first": "$patientid" },
            "doctorid" : { "$first": "$doctorid" },
            "medicalcondition" : { "$first": "$medicalcondition" },
            "diagnosis" : { "$first": "$diagnosis" },
            "addmissiondate" : { "$first": "$addmissiondate" },
            "dischargedate" : { "$first": "$dischargedate" },
            "bhtno" : { "$first": "$bhtno" },
            "prescription" : { "$push": "$prescription" }
        }
    }
])