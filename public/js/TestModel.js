class Test{
    constructor(long, lat, status, email, phoneNo, dateTime){
        this.long = long;
        this.lat = lat;
        this.status = status;
        this.email = email;
        this.phoneNo = phoneNo;
        this.dateTime = dateTime;
    }

    toString() {
        return this.long + ', ' + this.lat + ', ' + this.status + ', ' + this.email + ', ' + this.phoneNo + ", " + this.dateTime;
    }

    toFirestore(){
        return {
            long: this.long,
            lat: this.lat,
            status: this.status,
            email: this.email,
            phoneNo: this.phoneNo,
            dateTime: this.dateTime
        }
    }
}
