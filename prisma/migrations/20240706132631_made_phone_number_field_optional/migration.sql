-- AlterTable
ALTER TABLE "User" ALTER COLUMN "phonenumber" DROP NOT NULL;
CREATE DATABASE data_source
WITH ENGINE = "postgres",
PARAMETERS = {
   
    "host": "samples.mindsdb.com",
    "port": "5432"

};