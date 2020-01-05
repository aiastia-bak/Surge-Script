body = $response.body;
let obj = JSON.parse(body);
obj.mobileProfile.profileStatus="PROFILE_AVAILABLE";
obj.mobileProfile.legacyProfile="{\"licenseId\":\"490795A4547C35C26CEA\",\"licenseType\":3,\"licenseVersion\":\"1.0\",\"effectiveEndTimestamp\":1578470399000,\"graceTime\":432000000,\"licensedFeatures\":[],\"enigmaData\":{\"productId\":204,\"serialKey\":\"994303631980832131639441\",\"clearSerialKey\":\"12044581947496328621\",\"locale\":\"ALL\",\"associatedLocales\":\"ALL\",\"platform\":0,\"isk\":2044017,\"customerId\":0,\"deliveryMethod\":3,\"pc\":true,\"rb\":false}}";
obj.mobileProfile.relationshipProfile="[{\"profileGenerationTimestamp\":1578218463805,\"licenseId\":\"490795A4547C35C26CEA\",\"licenseExpiryTimestamp\":1578902399000,\"appEntitlementStatus\":\"SUBSCRIPTION\",\"activationType\":\"NAMED_USER\",\"billingStatus\":\"NORMAL\",\"usedForLegacyProfile\":true,\"licenseExpiryWarningControl\":{\"warningStartTimestamp\":1578297599000,\"warningInterval\":0}}]";
body = JSON.stringify(obj); 
$done({body});