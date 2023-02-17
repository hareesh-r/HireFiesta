const login = (data,app) => {
        const {userName,userEmail,userPassword,isCompany,website} = data

        let rowData = {
            "Name": userName,
            "Email" : userEmail,
            "PassWord" : userPassword
        }
        let companyData = {
            "CompanyWebsite" : website
        }

            var signupConfig = {
                platform_type: 'web',
                zaid: 10052474580
            };

            var userConfig = {
                last_name: userName,
                email_id: userEmail,
                role_id : '10813000000033016'
            };

            let userManagement = app.userManagement();
            let registerPromise = userManagement.registerUser(signupConfig, userConfig); //Pass the JSON configration to the method
            registerPromise.then(userDetails => {  //Returns a promise
                    rowData["IAMZUID"] = userDetails.user_details.user_id
                    let datastore = app.datastore();
                    let table = datastore.table("UserDetails");
                    let insertPromise = table.insertRow(rowData);
                     insertPromise.then((row) => {
                        return "success"
                        });
                        insertPromise.then((row)=>{
                            if(isCompany){
                                companyData["UserID"] = row.ROWID
                                let datastore = app.datastore();
                                    let table = datastore.table("Company");
                                    let insertPromise = table.insertRow(companyData);
                                     insertPromise.then((row) => {
                                        return "success"
                                        });
                                    insertPromise.catch(e=>console.log(e))
                            }
                        })

                    insertPromise.catch(e=>console.log(e))
            });
            registerPromise.catch(e=>console.log(e))

            

}

module.exports = login