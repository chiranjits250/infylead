from greatawesomeutils.lang import merge_dicts_in_one_dict,  merge_list_of_dicts, write_temp_json, read_json
cookies = {
    '_gaexp': 'GAX1.2.WCisaNTOTlaiVOBcnLS08Q.19489.0',
    'zp__initial_referrer': 'https://www.apollo.io/',
    '_ym_uid': '1681279312377791386',
    '_ym_d': '1681279312',
    '_ym_visorc': 'w',
    '_ym_isad': '2',
    '_gcl_au': '1.1.1038629687.1681279313',
    '_ga': 'GA1.2.332217224.1681279313',
    '_gid': 'GA1.2.426807405.1681279313',
    '_fbp': 'fb.1.1681279314158.949216327',
    '__hstc': '21978340.8633e5136708c8823e364e463b246dd7.1681279316518.1681279316518.1681279316518.1',
    'hubspotutk': '8633e5136708c8823e364e463b246dd7',
    '__hssrc': '1',
    'GCLB': 'CNmFybXlg6PVOg',
    '_ga_76XXTC73SP': 'GS1.1.1681279311.1.0.1681279331.0.0.0',
    '__hssc': '21978340.2.1681279316518',
    '_cioanonid': 'a7fff828-2432-da9d-62b7-0e3b3c6163e9',
    'remember_token_leadgenie_v2': 'eyJfcmFpbHMiOnsibWVzc2FnZSI6IklqWTBNelkwTjJNNU1EbGpPV05sTURCaE0yWmtZVGMzTTE5c1pXRmtaMlZ1YVdWamIyOXJhV1ZvWVhOb0lnPT0iLCJleHAiOiIyMDIzLTA1LTEyVDA2OjAzOjA3LjAzMloiLCJwdXIiOiJjb29raWUucmVtZW1iZXJfdG9rZW5fbGVhZGdlbmllX3YyIn19--b2e755fdef558fc3032c9b87111f71e927065dc7',
    'ZP_Pricing_Split_Test_Variant': '22Q3_A49_v2',
    'intercom-device-id-dyws6i9m': 'a2deca3f-ec89-4faf-8343-e72e56f07d84',
    'amplitude_id_122a93c7d9753d2fe678deffe8fac4cfapollo.io': 'eyJkZXZpY2VJZCI6ImNlOTQwZDMxLTBlNzAtNDNmZC05ZmM5LWQ4MGU4ODE5MjIwY1IiLCJ1c2VySWQiOiI2NDM2NDdjOTA5YzljZTAwYTNmZGE3NzMiLCJvcHRPdXQiOnRydWUsInNlc3Npb25JZCI6MTY4MTI3OTMxMDkxNCwibGFzdEV2ZW50VGltZSI6MTY4MTI3OTM4NDQwNCwiZXZlbnRJZCI6MSwiaWRlbnRpZnlJZCI6Miwic2VxdWVuY2VOdW1iZXIiOjN9',
    '_cioid': '643647c909c9ce00a3fda773',
    'X-CSRF-TOKEN': 'UG6uYNYfn3cLr8_y_wP59_ydsgtUswXwyWzOGLcNru6lMIB2KsNOiI4U_kduo1C-V_B6Z7NX1K1zCL7sx-kjtg',
    '_leadgenie_session': 'at%2B%2FyaYGKbO%2Bal2%2FFfMh26P53TnaIKuDPgcVGLCl9gzt00keifO35FzAv2j5QjhEwMQiekwL5XnOuixUNA5YsSwUC4qsmmDdCwQxQRO7z7g8HMIdfMPu6M1Fdl0P6LHZQdk3x9hBStXhqWl97PxLSl4WOunOoc7o3EyTyCvsuW6%2B9aF3NKg5h1lhAtcguNKC0zfZFRWJFTV8%2FVqWNTwdtwa6D0nBjOEADAEUHxjbtfP2mc8IGXRiJRQn3bo6CcxDlaHmH7k0EYlXsndjNldg0zsFTKB%2Fx1rDV28%3D--NgUcmuldmnOFDDnZ--%2BQIR1RrMTLSxv6CbZbAmBQ%3D%3D',
    'intercom-session-dyws6i9m': 'bEZqczdGWnd6VUZlMnZyRHRJOHVIazBldE1RbDJFYVdtWG9rVXRiRkNzU2s2Rnh0Tmk0SXVuV0IzenE2Tk9PRS0tWmZZVTdWUnJHKzNFcE1tRW8zQWdHUT09--b9d5b7fe139b6b6225ae6e42e37243e3ff18df08',
    '_dd_s': 'rum=0&expire=1681280353485',
}

headers = {
    'authority': 'app.apollo.io',
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9',
    'content-type': 'application/json',
    # 'cookie': '_gaexp=GAX1.2.WCisaNTOTlaiVOBcnLS08Q.19489.0; zp__initial_referrer=https://www.apollo.io/; _ym_uid=1681279312377791386; _ym_d=1681279312; _ym_visorc=w; _ym_isad=2; _gcl_au=1.1.1038629687.1681279313; _ga=GA1.2.332217224.1681279313; _gid=GA1.2.426807405.1681279313; _fbp=fb.1.1681279314158.949216327; __hstc=21978340.8633e5136708c8823e364e463b246dd7.1681279316518.1681279316518.1681279316518.1; hubspotutk=8633e5136708c8823e364e463b246dd7; __hssrc=1; GCLB=CNmFybXlg6PVOg; _ga_76XXTC73SP=GS1.1.1681279311.1.0.1681279331.0.0.0; __hssc=21978340.2.1681279316518; _cioanonid=a7fff828-2432-da9d-62b7-0e3b3c6163e9; remember_token_leadgenie_v2=eyJfcmFpbHMiOnsibWVzc2FnZSI6IklqWTBNelkwTjJNNU1EbGpPV05sTURCaE0yWmtZVGMzTTE5c1pXRmtaMlZ1YVdWamIyOXJhV1ZvWVhOb0lnPT0iLCJleHAiOiIyMDIzLTA1LTEyVDA2OjAzOjA3LjAzMloiLCJwdXIiOiJjb29raWUucmVtZW1iZXJfdG9rZW5fbGVhZGdlbmllX3YyIn19--b2e755fdef558fc3032c9b87111f71e927065dc7; ZP_Pricing_Split_Test_Variant=22Q3_A49_v2; intercom-device-id-dyws6i9m=a2deca3f-ec89-4faf-8343-e72e56f07d84; amplitude_id_122a93c7d9753d2fe678deffe8fac4cfapollo.io=eyJkZXZpY2VJZCI6ImNlOTQwZDMxLTBlNzAtNDNmZC05ZmM5LWQ4MGU4ODE5MjIwY1IiLCJ1c2VySWQiOiI2NDM2NDdjOTA5YzljZTAwYTNmZGE3NzMiLCJvcHRPdXQiOnRydWUsInNlc3Npb25JZCI6MTY4MTI3OTMxMDkxNCwibGFzdEV2ZW50VGltZSI6MTY4MTI3OTM4NDQwNCwiZXZlbnRJZCI6MSwiaWRlbnRpZnlJZCI6Miwic2VxdWVuY2VOdW1iZXIiOjN9; _cioid=643647c909c9ce00a3fda773; X-CSRF-TOKEN=UG6uYNYfn3cLr8_y_wP59_ydsgtUswXwyWzOGLcNru6lMIB2KsNOiI4U_kduo1C-V_B6Z7NX1K1zCL7sx-kjtg; _leadgenie_session=at%2B%2FyaYGKbO%2Bal2%2FFfMh26P53TnaIKuDPgcVGLCl9gzt00keifO35FzAv2j5QjhEwMQiekwL5XnOuixUNA5YsSwUC4qsmmDdCwQxQRO7z7g8HMIdfMPu6M1Fdl0P6LHZQdk3x9hBStXhqWl97PxLSl4WOunOoc7o3EyTyCvsuW6%2B9aF3NKg5h1lhAtcguNKC0zfZFRWJFTV8%2FVqWNTwdtwa6D0nBjOEADAEUHxjbtfP2mc8IGXRiJRQn3bo6CcxDlaHmH7k0EYlXsndjNldg0zsFTKB%2Fx1rDV28%3D--NgUcmuldmnOFDDnZ--%2BQIR1RrMTLSxv6CbZbAmBQ%3D%3D; intercom-session-dyws6i9m=bEZqczdGWnd6VUZlMnZyRHRJOHVIazBldE1RbDJFYVdtWG9rVXRiRkNzU2s2Rnh0Tmk0SXVuV0IzenE2Tk9PRS0tWmZZVTdWUnJHKzNFcE1tRW8zQWdHUT09--b9d5b7fe139b6b6225ae6e42e37243e3ff18df08; _dd_s=rum=0&expire=1681280353485',
    'referer': 'https://app.apollo.io/',
    'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'x-csrf-token': 'UG6uYNYfn3cLr8_y_wP59_ydsgtUswXwyWzOGLcNru6lMIB2KsNOiI4U_kduo1C-V_B6Z7NX1K1zCL7sx-kjtg',
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
