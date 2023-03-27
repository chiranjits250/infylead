from greatawesomeutils.lang import merge_dicts_in_one_dict,  merge_list_of_dicts, write_temp_json, read_json

cookies = {
    '_gaexp': 'GAX1.2.3TLf4k8DRoif-RfJH_IErw.19482.0',
    'zp__initial_referrer': 'https://www.google.com/',
    'zp__utm_source': 'www.google.com',
    'zp__initial_utm_source': 'www.google.com',
    '_gcl_au': '1.1.2076788177.1679895461',
    '_gid': 'GA1.2.1305056510.1679895461',
    '_rdt_uuid': '1679895460822.c90100ab-2c4d-4826-991e-2503e9b2cb39',
    '_fbp': 'fb.1.1679895460886.980103289',
    '_ym_uid': '1679895461562398916',
    '_ym_d': '1679895461',
    '_ym_isad': '2',
    '_ym_visorc': 'w',
    'hubspotutk': '641846f105836f7f3ffc878df5ce2728',
    'intercom-id-dyws6i9m': '9f91e8fb-c098-46a9-80d8-c458603ffc63',
    'intercom-device-id-dyws6i9m': '3405f6f4-c9b4-4e7c-b556-ee45d8300afa',
    'GCLB': 'CNyx7ILMn7_BfA',
    '_cioanonid': 'bdd5efe4-0efc-1e4c-3d3f-b5f3d4f1c740',
    'remember_token_leadgenie_v2': 'eyJfcmFpbHMiOnsibWVzc2FnZSI6IklqWTBNakV5WW1Ga1pHWm1aakZpTURCa1lXVTRaamc1TVY5c1pXRmtaMlZ1YVdWamIyOXJhV1ZvWVhOb0lnPT0iLCJleHAiOiIyMDIzLTA0LTI3VDA1OjM4OjQ0Ljg5N1oiLCJwdXIiOiJjb29raWUucmVtZW1iZXJfdG9rZW5fbGVhZGdlbmllX3YyIn19--e5a3bc119b9fad0bf3fc2fd7bd5bc4f65477a49d',
    '_cioid': '64212baddfff1b00dae8f891',
    '__stripe_mid': 'e26452bd-1009-4652-afd2-cfcdaf965db18f81df',
    '__stripe_sid': 'ee2235ef-51bb-48fc-9f1b-ded503462ae4e41b2a',
    '_ga_76XXTC73SP': 'GS1.1.1679895460.1.1.1679895579.0.0.0',
    '_ga': 'GA1.2.1903267712.1679895461',
    '_gat_UA-63770898-1': '1',
    '_uetsid': '7d955a00cc6111ed9de04b35f53137ae',
    '_uetvid': '7d95d8c0cc6111ed962c87a674a7b854',
    '__hstc': '21978340.641846f105836f7f3ffc878df5ce2728.1679895461913.1679895461913.1679895582210.2',
    '__hssrc': '1',
    'amplitude_id_122a93c7d9753d2fe678deffe8fac4cfapollo.io': 'eyJkZXZpY2VJZCI6ImE1NGRjOThjLWI3MGQtNDkyMy1iZTVlLWJmZDE0YWUzNGUwM1IiLCJ1c2VySWQiOiI2NDIxMmJhZGRmZmYxYjAwZGFlOGY4OTEiLCJvcHRPdXQiOnRydWUsInNlc3Npb25JZCI6MTY3OTg5NTQ2MDA4NywibGFzdEV2ZW50VGltZSI6MTY3OTg5NTU4Mzg1MSwiZXZlbnRJZCI6MTAsImlkZW50aWZ5SWQiOjQsInNlcXVlbmNlTnVtYmVyIjoxNH0=',
    '__hssc': '21978340.2.1679895582210',
    'ZP_Pricing_Split_Test_Variant': '22Q4_EC_X49_100',
    'intercom-session-dyws6i9m': 'L2NoZ3pCSktrS2Q0UlRWSHVHQmFXK0szVlNpNUZuU2VsaUF1b1puZ3RmUHpxUkxJcFA3b05DK1ZrU1gwanBXNy0tcFJPeVA1bXZ0WjdHOGRyNHBhVmx3dz09--14f351c7395a67acf66923752b3c188a188bdb21',
    'X-CSRF-TOKEN': '1A3YZaO34IMBjxeiwYNSPCdjRZJXcu5C8OT2VKND23BmWszzqbVscn6EQ4cbvD2kWWDvDWxBt8BiSTQYzGqTjg',
    '_leadgenie_session': '1XJ2B2mtX0ig0bLrwlS3tIm7Gz82tRtsnmcRgkmvV7QwuXa41lRLvzezliHZT7BtBrBMfv5PtVJq9IBpSJdf1pcYP2zpqhFmZzGO0WRYBtkbHRNUTVmBqaB1Sk5Wf2ven6NmoyVDFIyp%2Fetqjr5knYSr3w9ckg4oBYeshmGsyMzY6giSMtE8oeGbNHJYXneY%2B%2BxFGopcNP3XF5vSDD%2B0948%2FintA8o4cZZYF4%2BLZhCU%2Bt32eguimuNcXJG8Bnz5t%2BxTcj%2Ff5d2p0jp6Ig3t2cripF7DQtK%2Bndu8%3D--mBtW%2BSVHXMLsF%2FnR--r1EqWqgHK2svNsZkbzXg9A%3D%3D',
    '_dd_s': 'rum=0&expire=1679896513299',
}

headers = {
    'authority': 'app.apollo.io',
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9',
    'content-type': 'application/json',
    # 'cookie': '_gaexp=GAX1.2.3TLf4k8DRoif-RfJH_IErw.19482.0; zp__initial_referrer=https://www.google.com/; zp__utm_source=www.google.com; zp__initial_utm_source=www.google.com; _gcl_au=1.1.2076788177.1679895461; _gid=GA1.2.1305056510.1679895461; _rdt_uuid=1679895460822.c90100ab-2c4d-4826-991e-2503e9b2cb39; _fbp=fb.1.1679895460886.980103289; _ym_uid=1679895461562398916; _ym_d=1679895461; _ym_isad=2; _ym_visorc=w; hubspotutk=641846f105836f7f3ffc878df5ce2728; intercom-id-dyws6i9m=9f91e8fb-c098-46a9-80d8-c458603ffc63; intercom-device-id-dyws6i9m=3405f6f4-c9b4-4e7c-b556-ee45d8300afa; GCLB=CNyx7ILMn7_BfA; _cioanonid=bdd5efe4-0efc-1e4c-3d3f-b5f3d4f1c740; remember_token_leadgenie_v2=eyJfcmFpbHMiOnsibWVzc2FnZSI6IklqWTBNakV5WW1Ga1pHWm1aakZpTURCa1lXVTRaamc1TVY5c1pXRmtaMlZ1YVdWamIyOXJhV1ZvWVhOb0lnPT0iLCJleHAiOiIyMDIzLTA0LTI3VDA1OjM4OjQ0Ljg5N1oiLCJwdXIiOiJjb29raWUucmVtZW1iZXJfdG9rZW5fbGVhZGdlbmllX3YyIn19--e5a3bc119b9fad0bf3fc2fd7bd5bc4f65477a49d; _cioid=64212baddfff1b00dae8f891; __stripe_mid=e26452bd-1009-4652-afd2-cfcdaf965db18f81df; __stripe_sid=ee2235ef-51bb-48fc-9f1b-ded503462ae4e41b2a; _ga_76XXTC73SP=GS1.1.1679895460.1.1.1679895579.0.0.0; _ga=GA1.2.1903267712.1679895461; _gat_UA-63770898-1=1; _uetsid=7d955a00cc6111ed9de04b35f53137ae; _uetvid=7d95d8c0cc6111ed962c87a674a7b854; __hstc=21978340.641846f105836f7f3ffc878df5ce2728.1679895461913.1679895461913.1679895582210.2; __hssrc=1; amplitude_id_122a93c7d9753d2fe678deffe8fac4cfapollo.io=eyJkZXZpY2VJZCI6ImE1NGRjOThjLWI3MGQtNDkyMy1iZTVlLWJmZDE0YWUzNGUwM1IiLCJ1c2VySWQiOiI2NDIxMmJhZGRmZmYxYjAwZGFlOGY4OTEiLCJvcHRPdXQiOnRydWUsInNlc3Npb25JZCI6MTY3OTg5NTQ2MDA4NywibGFzdEV2ZW50VGltZSI6MTY3OTg5NTU4Mzg1MSwiZXZlbnRJZCI6MTAsImlkZW50aWZ5SWQiOjQsInNlcXVlbmNlTnVtYmVyIjoxNH0=; __hssc=21978340.2.1679895582210; ZP_Pricing_Split_Test_Variant=22Q4_EC_X49_100; intercom-session-dyws6i9m=L2NoZ3pCSktrS2Q0UlRWSHVHQmFXK0szVlNpNUZuU2VsaUF1b1puZ3RmUHpxUkxJcFA3b05DK1ZrU1gwanBXNy0tcFJPeVA1bXZ0WjdHOGRyNHBhVmx3dz09--14f351c7395a67acf66923752b3c188a188bdb21; X-CSRF-TOKEN=1A3YZaO34IMBjxeiwYNSPCdjRZJXcu5C8OT2VKND23BmWszzqbVscn6EQ4cbvD2kWWDvDWxBt8BiSTQYzGqTjg; _leadgenie_session=1XJ2B2mtX0ig0bLrwlS3tIm7Gz82tRtsnmcRgkmvV7QwuXa41lRLvzezliHZT7BtBrBMfv5PtVJq9IBpSJdf1pcYP2zpqhFmZzGO0WRYBtkbHRNUTVmBqaB1Sk5Wf2ven6NmoyVDFIyp%2Fetqjr5knYSr3w9ckg4oBYeshmGsyMzY6giSMtE8oeGbNHJYXneY%2B%2BxFGopcNP3XF5vSDD%2B0948%2FintA8o4cZZYF4%2BLZhCU%2Bt32eguimuNcXJG8Bnz5t%2BxTcj%2Ff5d2p0jp6Ig3t2cripF7DQtK%2Bndu8%3D--mBtW%2BSVHXMLsF%2FnR--r1EqWqgHK2svNsZkbzXg9A%3D%3D; _dd_s=rum=0&expire=1679896513299',
    'origin': 'https://app.apollo.io',
    'referer': 'https://app.apollo.io/?utm_campaign=Transactional%3A+Account+Activation&utm_medium=transactional_message&utm_source=cio',
    'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'x-csrf-token': '1A3YZaO34IMBjxeiwYNSPCdjRZJXcu5C8OT2VKND23BmWszzqbVscn6EQ4cbvD2kWWDvDWxBt8BiSTQYzGqTjg',
}


class LeadFinder():
    def getDataCredentials():
        return {
            "headers": headers,
            "cookies": cookies
        }

    def getCompanyCredentials():
        company_headers = {
            'authority': 'app.apollo.io',
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/json',
            # 'cookie': '_gaexp=GAX1.2.3TLf4k8DRoif-RfJH_IErw.19482.1; zp__initial_referrer=https://www.google.com/; zp__utm_source=www.google.com; zp__initial_utm_source=www.google.com; _ym_uid=1675734868977873352; _ym_d=1675734868; _ym_visorc=w; _ym_isad=2; _gcl_au=1.1.579885154.1675734870; _gid=GA1.2.1941131155.1675734870; _rdt_uuid=1675734871634.9614bbdc-acf1-402f-bcf8-1a489126ef8f; _fbp=fb.1.1675734871910.930696479; intercom-id-dyws6i9m=99657f8b-cbfd-463c-96c7-7f95fe6574e2; intercom-device-id-dyws6i9m=b9f31636-48c6-44f2-a26c-c28628c2e51c; _ga=GA1.1.552402865.1675734870; _uetsid=5ced6120a68a11eda17ec7768b68bcc4; _uetvid=5ced8b70a68a11ed9ca1cb6bc4a8bb5a; GCLB=CNWBwJf1zpvqKw; _ga_76XXTC73SP=GS1.1.1675734870.1.1.1675734918.0.0.0; _cioanonid=4aa89945-db6a-b275-ccd9-047b453dc35e; remember_token_leadgenie_v2=eyJfcmFpbHMiOnsibWVzc2FnZSI6IklqWXpaVEZtWTJKbFlUQTJZVE16TURCa1lqVTFNMlF4WVY5c1pXRmtaMlZ1YVdWamIyOXJhV1ZvWVhOb0lnPT0iLCJleHAiOiIyMDIzLTAzLTA3VDA3OjI1OjQ4LjcwMVoiLCJwdXIiOiJjb29raWUucmVtZW1iZXJfdG9rZW5fbGVhZGdlbmllX3YyIn19--487fa5103a606a091c6e0902082fd033df53728e; ZP_Pricing_Split_Test_Variant=22Q3_A49_v2; _cioid=63e1fcbea06a3300db553d1a; __stripe_mid=974aacc4-38dd-48a1-85f8-31e92a38d006dcb9f3; __stripe_sid=d18dca06-9402-4f0f-826a-a88bb1317bd5dd7188; amplitude_id_122a93c7d9753d2fe678deffe8fac4cfapollo.io=eyJkZXZpY2VJZCI6IjE4ZDE5NDBmLTUxODAtNDQ1OC04YzJhLWMyODYwNjQzZTc4OFIiLCJ1c2VySWQiOiI2M2UxZmNiZWEwNmEzMzAwZGI1NTNkMWEiLCJvcHRPdXQiOmZhbHNlLCJzZXNzaW9uSWQiOjE2NzU3MzQ4NjY0MzIsImxhc3RFdmVudFRpbWUiOjE2NzU3MzUwNDgwOTUsImV2ZW50SWQiOjIxLCJpZGVudGlmeUlkIjoxNSwic2VxdWVuY2VOdW1iZXIiOjM2fQ==; intercom-session-dyws6i9m=NThLejFvQ1ppMHVMOFNMbHZJblZEbUkvbUVkMExVSWdhMm1yK1IvcDIvazlnVHRuWGt5M2E5ZjBTdE9HRVMvWS0tWmNsL2s3bjFIT1g3ckJLWWh4OVRrdz09--b13934c4d702d7a17ee734b14746c77ca42d3210; X-CSRF-TOKEN=zD_eXtT5V7bRnuI7B_7kIta88aQVfklJKUFbo7E0ze73pu-j71RfVPUI8K7FDotaHTntp-dZaTMNfFDaeq88ng; _leadgenie_session=Gtll%2F%2BWoc9ryBqgwlhmcy9OlyWbAqzIXpUf73zQWYE0d5IvdbAqT04lnKK8g5r84I3HiWAb0puPoE04%2BwBvPtnBe9C%2FOW9fbKVaZuGigLz16fjTKRMt3iGfs6zlniT2otPmniAk2bDKCX1WO4We8F44i2QGHWvhRRps4Zdz%2Fj5n3OMTNaub8nZ42CffCU9NDvHnM53RsSgePrAwqw4lwGtBlSxqXWlIrgwg4hx%2Fdi3z5qComi9S5YwcqXra3gGxVqaMQjyaOxjqu%2FkMKR%2F2L1x9tX4D5y6IWVX8%3D--rvmTFH7BXfjhuS8U--B%2FCIsFmWW0A95fPuudw0aA%3D%3D; _dd_s=rum=0&expire=1675736010013',
            'origin': 'https://app.apollo.io',
            'referer': 'https://app.apollo.io/',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': "{'user_agent': 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.37'}",
            'x-csrf-token': 'D_yJe_XLqCERRgXVeylk3Wt_yBqD7Xs17hDLpvXlw46M1KaboH_RQC4Uqm9_HGnW_SBjVa1fc_MMK33QmhYtQg',
        }

        company_cookies = {
            '_gaexp': 'GAX1.2.3TLf4k8DRoif-RfJH_IErw.19482.2',
            'zp__initial_referrer': 'https://www.google.com/',
            'zp__utm_source': 'www.google.com',
            'zp__initial_utm_source': 'www.google.com',
            '_ym_uid': '1676371325710719657',
            '_ym_d': '1676371325',
            '_gcl_au': '1.1.1647127774.1676371327',
            '_rdt_uuid': '1676371326990.43e934c9-91a2-4060-bb3e-fa52c8f29c8f',
            '_fbp': 'fb.1.1676371327038.1079597040',
            'intercom-id-dyws6i9m': '0e64b641-096d-4c35-a54f-33ea228002a7',
            'intercom-device-id-dyws6i9m': '5e108f66-0849-4695-bbfd-90e2351d8ffc',
            '_cioanonid': '2e79f63f-56e6-5de5-62c0-432457282fd5',
            '__stripe_mid': '5699d0ec-3327-474b-9056-6b2f2ca1753bdfbc21',
            'zp__utm_medium': '(none)',
            'zp__initial_utm_medium': '(none)',
            '_gid': 'GA1.2.608191659.1676907984',
            '_ym_isad': '2',
            '_ga': 'GA1.1.1097658496.1676371326',
            '_uetsid': 'baaa0460b13511ed8c74db9efb3209c2',
            '_uetvid': '3a29ea80ac5411edb826257e3791c87a',
            '_ga_76XXTC73SP': 'GS1.1.1676907984.2.1.1676908066.0.0.0',
            'remember_token_leadgenie_v2': 'eyJfcmFpbHMiOnsibWVzc2FnZSI6IklqWXpaak01TmpCaU56STNNVGM1TURCbU1ETmtNamM1TkY5c1pXRmtaMlZ1YVdWamIyOXJhV1ZvWVhOb0lnPT0iLCJleHAiOiIyMDIzLTAzLTIwVDE1OjQ3OjUyLjM4MVoiLCJwdXIiOiJjb29raWUucmVtZW1iZXJfdG9rZW5fbGVhZGdlbmllX3YyIn19--6443e54041b40855b8496ea487a7b4f80a582a6e',
            'ZP_Pricing_Split_Test_Variant': '22Q4_EC_X49',
            '_cioid': '63f3960b72717900f03d2794',
            '__stripe_sid': '2708ffeb-ac16-480d-a3d1-859786d5ec8c488e3a',
            'amplitude_id_122a93c7d9753d2fe678deffe8fac4cfapollo.io': 'eyJkZXZpY2VJZCI6IjZlMzgxYzE5LTMxNzItNGJkMC1hODgxLTI3MzhkN2Y4MmVjYVIiLCJ1c2VySWQiOiI2M2YzOTYwYjcyNzE3OTAwZjAzZDI3OTQiLCJvcHRPdXQiOmZhbHNlLCJzZXNzaW9uSWQiOjE2NzY5MDc5ODM3MDUsImxhc3RFdmVudFRpbWUiOjE2NzY5MTI4MzE2NjUsImV2ZW50SWQiOjcxLCJpZGVudGlmeUlkIjoxMzMsInNlcXVlbmNlTnVtYmVyIjoyMDR9',
            'intercom-session-dyws6i9m': 'a0ljNUMzZnNmS2UvNHlNU01TTHl6MVVOQ2Rza1dVaUdFU2UvTFlNS3l4cWxlSURXdHpBOG84eCt1UHBJNkI3UC0tbFBiOEpEVWRvQmZNaVZNQ2dGMDhuQT09--a1f4303fa41aaa75ff9d888dc69ad87392eace01',
            '_dd_s': 'rum=0&expire=1676913991562',
            'X-CSRF-TOKEN': 'D_yJe_XLqCERRgXVeylk3Wt_yBqD7Xs17hDLpvXlw46M1KaboH_RQC4Uqm9_HGnW_SBjVa1fc_MMK33QmhYtQg',
            '_leadgenie_session': 'n8tPirrDl2I5FQobJh0poE%2FmCXy17Vv4T8PXOZsVOkbhm3GDUmnICWjGuJoj82RIazXTUYfQ76XZCpHSBD9233VKyMlZcEsw2C0y0bWr1Xfg%2FzK2Hpkhstx88KLAX5JsiYgPO2fhqgMM3UtqRnQGXFsSPWsOsGweZrKGyuGBXBbrJUZgiQJbHOV7gqlpqm78k%2Bd1%2FVDHb2btGmab7V1sxie53ikbCtAWY7mhNHb%2FUTI5ZAvzWoYlAevDQBGtolCvSeW1eGW%2F75IVT0LYrdfPCuOiuTwnO4Ywsc0%3D--Odm0JQUTyfOsXVQy--sTHfsD4xjlbCX689mcbgLg%3D%3D',
            'GCLB': 'CNTe-ceY9Pqk4gE',
        }

        return {
            "headers":  merge_dicts_in_one_dict([company_headers, headers]),
            "cookies":     merge_dicts_in_one_dict([company_cookies, cookies])
        }
