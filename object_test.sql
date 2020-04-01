CREATE TABLE public.obj(
  type                    VARCHAR(6) NOT NULL
  ,property_type           VARCHAR(5) NOT NULL
  ,category                VARCHAR(7) NOT NULL
  ,creation_date           TIMESTAMP  NOT NULL
  ,location_country        VARCHAR(6) NOT NULL
  ,location_region         VARCHAR(64) NOT NULL
  ,location_district       VARCHAR(64) NOT NULL
  ,location_locality_name  VARCHAR(64) NOT NULL
  ,location_address        VARCHAR(64) NOT NULL
  ,location_apartment      INTEGER  NOT NULL
  ,sales_agent_phone       VARCHAR(12) NOT NULL
  ,sales_agent_category    VARCHAR(8) NOT NULL
  ,images                  VARCHAR(64) NOT NULL
  ,price_value             MONEY NOT NULL
  ,price_currency          VARCHAR(3) NOT NULL
  ,price_period            VARCHAR(5) NOT NULL
  ,rent_pledge             VARCHAR(3) NOT NULL
  ,area_value              INTEGER  NOT NULL
  ,area_unit               VARCHAR(5) NOT NULL
  ,room_space_value        INTEGER  NOT NULL
  ,room_space_unit         VARCHAR(5) NOT NULL
  ,living_space_value      INTEGER  NOT NULL
  ,living_space_unit       VARCHAR(5) NOT NULL
  ,rooms                   INTEGER  NOT NULL
  ,rooms_offered           INT  NOT NULL
  ,floor                   INTEGER  NOT NULL
  ,internalid              INT  NOT NULL
  ,userid                  VARCHAR(64)  NOT NULL
);
INSERT INTO public.obj(type                   
,property_type         
,category              
,creation_date         
,location_country      
,location_region       
,location_district     
,location_locality_name
,location_address      
,location_apartment    
,sales_agent_phone     
,sales_agent_category  
,images                
,price_value           
,price_currency        
,price_period          
,rent_pledge           
,area_value            
,area_unit             
,room_space_value      
,room_space_unit       
,living_space_value    
,living_space_unit     
,rooms                 
,rooms_offered         
,floor                 
,internalid            
,userid) VALUES ('аренда','жилая','комната','3215-11-13T12:32:45+04:00','Россия','zxcss','zxc район','asdqwqw','sdswdf, 34',56,'+79104565459','владелец','/images/obj2',2450,'RUR','месяц','да',40,'кв. м',45,'кв. м',12,'кв. м',3,6,11,23,'asdeasdc-2334-410b-8ceb-40860c9dsdfd');

