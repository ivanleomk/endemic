class Api{
    constructor(db){
        this.db = db;
        this.TEST_TABLE_NAME = "tests";
    }

    setTest(test){
        console.log("jiojoijoi");
        this.db.collection(this.TEST_TABLE_NAME)
            .add({
                name: "Tokyo",
                country: "Japan"
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        console.log("updated");
    }

}