class Test{
    constructor(testId, ageGroup, long, lat, status, email, phoneNo, dateTime, 
                isPregnant, isAsthma, isDiabetes, isLiver, isImmune, isBlood, isImmuneSystem, subjectFeeling){
        this.testId = testId;
        this.ageGroup = ageGroup;
        this.long = long;
        this.lat = lat;
        this.status = status;
        this.email = email;
        this.phoneNo = phoneNo;
        this.dateTime = dateTime;
        this.isPregnant = isPregnant;
        this.isAsthma = isAsthma;
        this.isDiabetes = isDiabetes;
        this.isLiver = isLiver;
        this.isImmune = isImmune;
        this.isBlood = isBlood;
        this.isImmuneSystem = isImmuneSystem;
        this.subjectFeeling = subjectFeeling;
    }

    toString() {
        return this.long + ', ' + this.lat + ', ' + this.status + ', ' + this.email + ', ' + this.phoneNo + ", " + this.dateTime;
    }

    toFirestore(){
        return {
            testId: this.testId,
            ageGroup: this.ageGroup,
            long: this.long,
            lat: this.lat,
            status: this.status,
            email: this.email,
            phoneNo: this.phoneNo,
            dateTime: this.dateTime,
            isPregnant: this.isPregnant,
            isAsthma: this.isAsthma,
            isDiabetes: this.isDiabetes,
            isLiver: this.isLiver,
            isImmune: this.isImmune,
            isBlood: this.isBlood,
            isImmuneSystem: this.isImmuneSystem,
            subjectFeeling: this.subjectFeeling
        }
    }
}
