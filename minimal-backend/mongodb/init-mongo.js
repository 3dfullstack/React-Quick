db.createUser(
	{
		user : "sample",
		pwd : "samplepassword",
		roles : [
			{
				role : "readWrite",
				db : "sampledb"
			}
		]
	}
)