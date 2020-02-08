testConverter = {
    toFirestore: function(test) {
        return {
            long: test.long,
            lat: test.lat,
            status: test.status,
            email: test.email,
            phoneNo: test.phoneNo,
            dateTime: test.dateTime
        }
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new Test(data.long, data.lat, data.status, data.email, data.phoneNo, data.dateTime);
    }
}

class Api{
    constructor(db){
        this.db = db;
        this.TEST_TABLE_NAME = "tests";
    }

    setTest(test){
        db.collection(this.TEST_TABLE_NAME)
            .withConverter(testConverter)
            .add(test.toFirestore())
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

    }

    getAllTest(){
        db.collection(this.TEST_TABLE_NAME)
            .withConverter(testConverter)
            .get().then(function(doc) {
                if (doc.exists){
                    // Convert to City object
                    test = doc.data();
                    // Use a City instance method
                    console.log(test.toString());
                } else {
                    console.log("No such document!")
                }
            }).catch(function(error) {
                console.log("Error getting document:", error)
            });
    }

}