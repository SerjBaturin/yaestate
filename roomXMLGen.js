// fs - work with file system
const fs = require("fs");

/**
 * roomXMLGen returns ROOM YANDEX ESTATE xml template
 * 
 * @param {object} o - one object from array of estate objects (POSTGRESQL)
 * @param {string} folder - common folder path "/images"
 * folder + o.images = "/images/obj" (folder with room images)
 * @return {string} - one room from many rooms array
 */
const roomXMLGen = (o, folder) => {
  
  // imgArray it's an array of images from object folder
  // readdirSync it's a sync method to read folder's elements (images)
  // we need sync method - cause we need insert images in xml template
  // if we will use async method (fs.readdir) - our images will NOT insert in xml template
  const imgArray = fs.readdirSync(folder + o.images);
  
  return `
          <!-- Аренда комнаты -->
          <offer internal-id="${o.internalid}">
          <type>${o.type}</type>
          <propery-type>${o.property_type}</propery-type>
          <category>${o.category_type}</category>
          <creation-date>${o.creation_date}</creation-date>
          <location>
            <country>${o.location_country}</country>
            <region>${o.location_region}</region>
            <district>${o.location_district}</district>
            <locality-name>${o.location_locality_name}</locality-name>
            <address>${o.location_address}</address>
            <apartment>${o.location_apartment}</apartment>
          </location>
          <sales-agent>
            <phone>${o.sales_agent_phone}</phone>
            <category>${o.sales_agent_category}</category>
          </sales-agent>
          ${imgArray
            .map(img => `<image>${img}</image>`)
            .toString()
            .split(",")
            .join("\n          ")}
          <price>
            <value>${o.price_value}</value>
            <currency>${o.price_currency}</currency>
            <period>${o.price_period}</period>
          </price>
          <rent-pledge>${o.rent_pledge}</rent-pledge>
          <area>     
            <value>${o.area_value}</value>    
            <unit>${o.area_unit}</unit>
          </area>
          <room-space>     
            <value>${o.room_space_value}</value>    
            <unit>${o.room_space_unit}</unit>
          </room-space>
          <living-space>     
            <value>${o.living_space_value}</value>
            <unit>${o.living_space_unit}</unit>
          </living-space>
          <rooms>${o.rooms}</rooms>
          <rooms-offered>${o.rooms_offered}</rooms-offered>
          </offer>
          `;
};

module.exports = roomXMLGen;
