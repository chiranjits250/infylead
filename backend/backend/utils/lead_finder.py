from greatawesomeutils.lang import merge_dicts_in_one_dict


cookies = {
    'zp__initial_referrer': 'https://www.apollo.io/',
    'mutiny.user.token': 'd024b86a-6ef0-4b2e-ae17-d81ed71d9cb6',
    'mutiny.user.session': 'da49b8d0-9cac-4461-9f89-0071d1b63463',
    'ps_mode': 'trackingV1',
    'GCLB': 'CNSHjoCw6cHt6wE',
    'remember_token_leadgenie_v2': 'eyJfcmFpbHMiOnsibWVzc2FnZSI6IklqWTBZekl5TURaaU1HRXpZVGcxTURCaVlXVTBOakV5TkY5c1pXRmtaMlZ1YVdWamIyOXJhV1ZvWVhOb0lnPT0iLCJleHAiOiIyMDIzLTA4LTI3VDA3OjQ0OjQ0LjE0OVoiLCJwdXIiOiJjb29raWUucmVtZW1iZXJfdG9rZW5fbGVhZGdlbmllX3YyIn19--3ae51f8d5f65633eb9a88a4f9f4a4ed84af9c3e0',
    'zp__utm_source': 'account.live.com',
    'zp__initial_utm_source': 'account.live.com',
    'ln_or': 'eyIzNjUyNDA0IjoiZCJ9',
    '__hstc': '21978340.27ca98fb9cd0181572efe9fffe34021b.1690443912265.1690443912265.1690443912265.1',
    'hubspotutk': '27ca98fb9cd0181572efe9fffe34021b',
    '__hssrc': '1',
    '_cioanonid': '4c51d60a-961b-77ee-8d8d-9aa5a94347c0',
    'ZP_Pricing_Split_Test_Variant': '23Q1_EC_Y49',
    'intercom-device-id-dyws6i9m': '73b7c9a7-2e09-48da-95ad-98dba017c3d4',
    '_cioid': '64c2206b0a3a8500bae46124',
    '__stripe_mid': 'c18bbd27-cd40-46dc-8703-73f50ac2883c95a85a',
    '__stripe_sid': '9ba40be4-d380-4ff3-b1a6-02e82caa51637a5fbd',
    'amplitude_id_122a93c7d9753d2fe678deffe8fac4cfapollo.io': 'eyJkZXZpY2VJZCI6IjNkYTQyM2NkLTIxODAtNDE0My05ZWI1LWNmYzg3YTlmMzUyZFIiLCJ1c2VySWQiOiI2NGMyMjA2YjBhM2E4NTAwYmFlNDYxMjQiLCJvcHRPdXQiOnRydWUsInNlc3Npb25JZCI6MTY5MDQ0Mzg0ODE1NiwibGFzdEV2ZW50VGltZSI6MTY5MDQ0Mzk0ODIzMCwiZXZlbnRJZCI6MywiaWRlbnRpZnlJZCI6Mywic2VxdWVuY2VOdW1iZXIiOjZ9',
    '__hssc': '21978340.2.1690443912266',
    'intercom-session-dyws6i9m': 'Z3BHQkN6R2FiUDljcldPQmVhSU84UnRjOEl3VTlUOWZ0bWFMYlg0RU5aYmQ3Q0cwOUhIWnMzajhPYTM2OFVVai0tdFlyaHZ2M21jUkFnOHMrMmJKMDJ5QT09--cb80d3da214735eae35c8f53f1cdc9d829b5afca',
    'X-CSRF-TOKEN': 'v9SZBEoGo7hCiBzbNaG2q3u12N8TNarG_25E0YffBF-4FHY22mhGj-pvrY_zpyd0EWfuFJo8qnDk7hwiIVZNUQ',
    '_leadgenie_session': 'vcP6BKjy4jMTiAcgIukV%2Bq%2FN%2BFcRToTlV8qN7Ns%2BeleC6uyEhrles4mOfbFRMLfQijdSXeCqSEIHwbGVYkDdTjpULszKtrhMuZRE9GFLB2MqGKLDndwcV8vBXM1WQfmnH6lVAWHBBlKfGTrmTHDiOZ2jcDSIR3K620BeIsWszGXCao1waTxDguuFU70ZhuR2venDEu4FzyjUBvyBg7rKtejZbBqtVhYbDGS7obSPkW0Gxt91wn206TXZOrwPjwAUBfai8Pl76M7tRya%2Bqx4F3ESLBjefCwtQYWc%3D--SnvrpwKfh1eti2Ka--YQ34uTKWIfvPGBywtLyk8g%3D%3D',
    '_dd_s': 'rum=0&expire=1690444872689',
}

headers = {
    'authority': 'app.apollo.io',
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9',
    'content-type': 'application/json',
    # 'cookie': 'zp__initial_referrer=https://www.apollo.io/; mutiny.user.token=d024b86a-6ef0-4b2e-ae17-d81ed71d9cb6; mutiny.user.session=da49b8d0-9cac-4461-9f89-0071d1b63463; ps_mode=trackingV1; GCLB=CNSHjoCw6cHt6wE; remember_token_leadgenie_v2=eyJfcmFpbHMiOnsibWVzc2FnZSI6IklqWTBZekl5TURaaU1HRXpZVGcxTURCaVlXVTBOakV5TkY5c1pXRmtaMlZ1YVdWamIyOXJhV1ZvWVhOb0lnPT0iLCJleHAiOiIyMDIzLTA4LTI3VDA3OjQ0OjQ0LjE0OVoiLCJwdXIiOiJjb29raWUucmVtZW1iZXJfdG9rZW5fbGVhZGdlbmllX3YyIn19--3ae51f8d5f65633eb9a88a4f9f4a4ed84af9c3e0; zp__utm_source=account.live.com; zp__initial_utm_source=account.live.com; ln_or=eyIzNjUyNDA0IjoiZCJ9; __hstc=21978340.27ca98fb9cd0181572efe9fffe34021b.1690443912265.1690443912265.1690443912265.1; hubspotutk=27ca98fb9cd0181572efe9fffe34021b; __hssrc=1; _cioanonid=4c51d60a-961b-77ee-8d8d-9aa5a94347c0; ZP_Pricing_Split_Test_Variant=23Q1_EC_Y49; intercom-device-id-dyws6i9m=73b7c9a7-2e09-48da-95ad-98dba017c3d4; _cioid=64c2206b0a3a8500bae46124; __stripe_mid=c18bbd27-cd40-46dc-8703-73f50ac2883c95a85a; __stripe_sid=9ba40be4-d380-4ff3-b1a6-02e82caa51637a5fbd; amplitude_id_122a93c7d9753d2fe678deffe8fac4cfapollo.io=eyJkZXZpY2VJZCI6IjNkYTQyM2NkLTIxODAtNDE0My05ZWI1LWNmYzg3YTlmMzUyZFIiLCJ1c2VySWQiOiI2NGMyMjA2YjBhM2E4NTAwYmFlNDYxMjQiLCJvcHRPdXQiOnRydWUsInNlc3Npb25JZCI6MTY5MDQ0Mzg0ODE1NiwibGFzdEV2ZW50VGltZSI6MTY5MDQ0Mzk0ODIzMCwiZXZlbnRJZCI6MywiaWRlbnRpZnlJZCI6Mywic2VxdWVuY2VOdW1iZXIiOjZ9; __hssc=21978340.2.1690443912266; intercom-session-dyws6i9m=Z3BHQkN6R2FiUDljcldPQmVhSU84UnRjOEl3VTlUOWZ0bWFMYlg0RU5aYmQ3Q0cwOUhIWnMzajhPYTM2OFVVai0tdFlyaHZ2M21jUkFnOHMrMmJKMDJ5QT09--cb80d3da214735eae35c8f53f1cdc9d829b5afca; X-CSRF-TOKEN=v9SZBEoGo7hCiBzbNaG2q3u12N8TNarG_25E0YffBF-4FHY22mhGj-pvrY_zpyd0EWfuFJo8qnDk7hwiIVZNUQ; _leadgenie_session=vcP6BKjy4jMTiAcgIukV%2Bq%2FN%2BFcRToTlV8qN7Ns%2BeleC6uyEhrles4mOfbFRMLfQijdSXeCqSEIHwbGVYkDdTjpULszKtrhMuZRE9GFLB2MqGKLDndwcV8vBXM1WQfmnH6lVAWHBBlKfGTrmTHDiOZ2jcDSIR3K620BeIsWszGXCao1waTxDguuFU70ZhuR2venDEu4FzyjUBvyBg7rKtejZbBqtVhYbDGS7obSPkW0Gxt91wn206TXZOrwPjwAUBfai8Pl76M7tRya%2Bqx4F3ESLBjefCwtQYWc%3D--SnvrpwKfh1eti2Ka--YQ34uTKWIfvPGBywtLyk8g%3D%3D; _dd_s=rum=0&expire=1690444872689',
    'referer': 'https://app.apollo.io/',
    'sec-ch-ua': '',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '""',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
    'x-csrf-token': 'v9SZBEoGo7hCiBzbNaG2q3u12N8TNarG_25E0YffBF-4FHY22mhGj-pvrY_zpyd0EWfuFJo8qnDk7hwiIVZNUQ',
}

# cookies = {
#     'zp__initial_referrer': 'https://www.apollo.io/',
#     'ps_mode': 'trackingV1',
#     '_gcl_au': '1.1.1037850904.1682065041',
#     '_ga_76XXTC73SP': 'GS1.1.1682065041.1.0.1682065041.0.0.0',
#     '_ga': 'GA1.1.86196508.1682065041',
#     'GCLB': 'CNeYqonv_JTlZQ',
#     '_dd_s': 'rum=0&expire=1682066022667',
#     '_cioanonid': '480ba570-b08f-d240-bfba-1d2144411173',
#     'ZP_Pricing_Split_Test_Variant': '23Q1_EC_Y49',
#     'X-CSRF-TOKEN': 'wlkpA6I3PsBDjbtOyhBjb2c87RuX75rG_qaQsbxeFiEcKxkjzzrP3za9BU4WFesXcfftNREQ9Nq31Ga7n4hsyg',
#     '_leadgenie_session': 'bTZKln8Bsz%2BiAhikqswYJKG7JpdmlRuWR4TozjltDxgzK04HeVgjTFnU2PrOkhqLSSKi60ltI%2B4Np1dPRYhFYeSypGnrylgm3vDmR%2BZ6JFbH9T0Vz7qYaVHWl%2B1fwhIfyxstEdXq%2Fy44Y3Gxtih1DB4%2FRCjKZGtLhPlspE00ehf375K0mXhJsMHvWDa1YgOFg8CiXBAxWGVFo7G7CRW1jzdOhAd%2BgBJZn7hF7AkNcx%2BryCfgJpvcdVddqbXKEZyOWlnZndcPxPw%2FXGzX10CBRNB%2BdFgPsSJVx2Q%3D--M6c8HHzBTI9GbGi%2F--csw287mo5IzmC3LvNnixCg%3D%3D',
#     'remember_token_leadgenie_v2': 'eyJfcmFpbHMiOnsibWVzc2FnZSI6IklqWTBOREl6T1Rjek9HSmxOek5tTURCaE0yVmpaRE00WTE5c1pXRmtaMlZ1YVdWamIyOXJhV1ZvWVhOb0lnPT0iLCJleHAiOiIyMDIzLTA1LTIxVDA4OjE3OjQyLjc1M1oiLCJwdXIiOiJjb29raWUucmVtZW1iZXJfdG9rZW5fbGVhZGdlbmllX3YyIn19--484342a72d0ed697fec5878096567eaf70ff5f67',
#     'intercom-session-dyws6i9m': 'K2EvTTZtQk8vT01zVXZYYkJ1S2QxMW9OaStyWDhOaWRJdEwyemJkaDZ3MVBuUUZYNzByNFM3M3hXM2k0YjNzbC0tT090MllSa0YrQjFQVUR5NkRRcUlIdz09--0759dd13ef9e4926328b52cdc70f4f3215ae18fc',
#     'intercom-device-id-dyws6i9m': '2354eb7c-2d06-41a8-aa16-ab4b4d2d305b',
#     '_cioid': '644239738be73f00a3ecd38c',
#     '__stripe_mid': '71c73d80-6302-43c2-ae7a-582625003c2af656ad',
#     '__stripe_sid': 'da6888d5-3e52-40b9-b6c3-72f0cbef8bf5172ead',
# }

# headers ={
#     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0',
#     'Accept': '*/*',
#     'Accept-Language': 'en-US,en;q=0.5',
#     # 'Accept-Encoding': 'gzip, deflate, br',
#     'Referer': 'https://app.apollo.io/',
#     'Content-Type': 'application/json',
#     'X-CSRF-TOKEN': 'wlkpA6I3PsBDjbtOyhBjb2c87RuX75rG_qaQsbxeFiEcKxkjzzrP3za9BU4WFesXcfftNREQ9Nq31Ga7n4hsyg',
#     'Origin': 'https://app.apollo.io',
#     'DNT': '1',
#     'Connection': 'keep-alive',
#     # 'Cookie': 'zp__initial_referrer=https://www.apollo.io/; ps_mode=trackingV1; _gcl_au=1.1.1037850904.1682065041; _ga_76XXTC73SP=GS1.1.1682065041.1.0.1682065041.0.0.0; _ga=GA1.1.86196508.1682065041; GCLB=CNeYqonv_JTlZQ; _dd_s=rum=0&expire=1682066022667; _cioanonid=480ba570-b08f-d240-bfba-1d2144411173; ZP_Pricing_Split_Test_Variant=23Q1_EC_Y49; X-CSRF-TOKEN=wlkpA6I3PsBDjbtOyhBjb2c87RuX75rG_qaQsbxeFiEcKxkjzzrP3za9BU4WFesXcfftNREQ9Nq31Ga7n4hsyg; _leadgenie_session=bTZKln8Bsz%2BiAhikqswYJKG7JpdmlRuWR4TozjltDxgzK04HeVgjTFnU2PrOkhqLSSKi60ltI%2B4Np1dPRYhFYeSypGnrylgm3vDmR%2BZ6JFbH9T0Vz7qYaVHWl%2B1fwhIfyxstEdXq%2Fy44Y3Gxtih1DB4%2FRCjKZGtLhPlspE00ehf375K0mXhJsMHvWDa1YgOFg8CiXBAxWGVFo7G7CRW1jzdOhAd%2BgBJZn7hF7AkNcx%2BryCfgJpvcdVddqbXKEZyOWlnZndcPxPw%2FXGzX10CBRNB%2BdFgPsSJVx2Q%3D--M6c8HHzBTI9GbGi%2F--csw287mo5IzmC3LvNnixCg%3D%3D; remember_token_leadgenie_v2=eyJfcmFpbHMiOnsibWVzc2FnZSI6IklqWTBOREl6T1Rjek9HSmxOek5tTURCaE0yVmpaRE00WTE5c1pXRmtaMlZ1YVdWamIyOXJhV1ZvWVhOb0lnPT0iLCJleHAiOiIyMDIzLTA1LTIxVDA4OjE3OjQyLjc1M1oiLCJwdXIiOiJjb29raWUucmVtZW1iZXJfdG9rZW5fbGVhZGdlbmllX3YyIn19--484342a72d0ed697fec5878096567eaf70ff5f67; intercom-session-dyws6i9m=K2EvTTZtQk8vT01zVXZYYkJ1S2QxMW9OaStyWDhOaWRJdEwyemJkaDZ3MVBuUUZYNzByNFM3M3hXM2k0YjNzbC0tT090MllSa0YrQjFQVUR5NkRRcUlIdz09--0759dd13ef9e4926328b52cdc70f4f3215ae18fc; intercom-device-id-dyws6i9m=2354eb7c-2d06-41a8-aa16-ab4b4d2d305b; _cioid=644239738be73f00a3ecd38c; __stripe_mid=71c73d80-6302-43c2-ae7a-582625003c2af656ad; __stripe_sid=da6888d5-3e52-40b9-b6c3-72f0cbef8bf5172ead',
#     'Sec-Fetch-Dest': 'empty',
#     'Sec-Fetch-Mode': 'cors',
#     'Sec-Fetch-Site': 'same-origin',
#     # Requests doesn't support trailers
#     # 'TE': 'trailers',
# }

proxies =  {'http': 'http://brd-customer-hl_e8706ce4-zone-zone3:j8l9d3ddsaxq@zproxy.lum-superproxy.io:22225',
            'https': 'http://brd-customer-hl_e8706ce4-zone-zone3:j8l9d3ddsaxq@zproxy.lum-superproxy.io:22225'}


alternatecookies =cookies

alternateheaders =headers

alternateproxies =  proxies

useAlternate = False 
# useAlternate = True
class LeadFinder():
    def useAlternate():
        global useAlternate
        useAlternate = True

    def isUsingAlternate():
        global useAlternate
        return useAlternate

    def getDataCredentials():
        global useAlternate
        if useAlternate:
            print('using alternate')
            ahc = {
                "headers": alternateheaders,
                "cookies": alternatecookies, 
                "proxies":alternateproxies, 
        }

            return ahc
        # , alternateproxies
        else: 
            hc = {
                "headers": headers,
                "cookies": cookies,
                "proxies":proxies, 
            }

            return hc
        # , proxies

    # def getAlternativeCredentials():
    #     return {
    #         "headers": alternateheaders,
    #         "cookies": alternatecookies
    #     }

    def getCompanyCredentials():
        company_headers = {
    'authority': 'app.apollo.io',
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9',
    'content-type': 'application/json',
    # 'cookie': 'zp__initial_referrer=https://www.google.com/; zp__utm_content=brand_exact; zp__initial_utm_content=brand_exact; zp__utm_medium=cpc; zp__initial_utm_medium=cpc; zp__utm_source=google; zp__initial_utm_source=google; zp__utm_campaign=gg_in_dg_search_brand_en; zp__initial_utm_campaign=gg_in_dg_search_brand_en; zp__utm_term=apollo.io; zp__initial_utm_term=apollo.io; mutiny.user.token=08d90e30-e1cd-4fb1-a73d-492ed5973902; _gcl_aw=GCL.1686559144.EAIaIQobChMIq_X6s6q9_wIVh5BLBR1j0g3mEAAYASAAEgL8KvD_BwE; _gcl_au=1.1.1363157525.1686559144; _ga=GA1.1.759764751.1686559144; _ga_76XXTC73SP=GS1.1.1686559143.1.0.1686559145.58.0.0; hubspotutk=5d86236729c4ece5963bbb5af65704ed; _cioanonid=11e5ba23-8270-c02c-085e-3fb5d0d89d95; remember_token_leadgenie_v2=eyJfcmFpbHMiOnsibWVzc2FnZSI6IklqWTBOV0kzWmpNeU5ERXpPRFk0TURCaE16WTJaVFUxTlY5c1pXRmtaMlZ1YVdWamIyOXJhV1ZvWVhOb0lnPT0iLCJleHAiOiIyMDIzLTA3LTEyVDA4OjM5OjMyLjIxNFoiLCJwdXIiOiJjb29raWUucmVtZW1iZXJfdG9rZW5fbGVhZGdlbmllX3YyIn19--9b1c7556ca8be9cab8b132d1d05b4a7619090821; intercom-device-id-dyws6i9m=0244e817-c50a-42a3-a5f3-e6b9611f4a93; _cioid=645b7f3241386800a366e555; __stripe_mid=88ef40b8-3e8c-4a7e-ad97-f282bed6d739a31548; GCLB=CJ7G9ZnZ_bTJeg; amplitude_id_122a93c7d9753d2fe678deffe8fac4cfapollo.io=eyJkZXZpY2VJZCI6ImE1YzU4MjNmLTkwMjgtNDFhZC04M2M1LTcyZDQ5NjgyOTExOFIiLCJ1c2VySWQiOiI2NDViN2YzMjQxMzg2ODAwYTM2NmU1NTUiLCJvcHRPdXQiOnRydWUsInNlc3Npb25JZCI6MTY4Njc0Mjc2OTEwNSwibGFzdEV2ZW50VGltZSI6MTY4Njc0Mjc2OTEwNSwiZXZlbnRJZCI6MCwiaWRlbnRpZnlJZCI6MSwic2VxdWVuY2VOdW1iZXIiOjF9; __hstc=21978340.5d86236729c4ece5963bbb5af65704ed.1686559146924.1686559146924.1686742769114.2; __hssrc=1; __hssc=21978340.1.1686742769114; ZP_Pricing_Split_Test_Variant=23Q1_EC_Y49; __stripe_sid=7ca7dfc1-aa88-46ba-b2f3-ad57f7c30fdf7c0938; X-CSRF-TOKEN=yXwy453WTV7AzxSMcZ1ZsZs2EZf4g5zo3DA5GjZmt2_MPiMjxqavmbbXRtx7ox5B_55rWQmnJvURHKzWIZRxyQ; _leadgenie_session=yyvmxcK8M61ZqbdSFa9t9fHlkJDt4JsSba%2FLb1vhnDAvwjvfTpwgedSNqpY5b0F%2BA3EiRPfgmKcT7wZ%2FGCOYKuu8WouHRjGemHzWZaIFJu7k%2BwHhyfGTXziMefh3e4wIlfE76OEqgXJwuLltbvXDXiCjkVhD8O5lcryX%2FadgxS8Db5peKfXV9C5oEC9FtrC0eaQK%2FT7sqZVgx6uZ9NJgPKkhjg18ox9W%2FheJRidOpWMSxT3Z7p216kOXosWOjik7NolGk1Qzyp5tEB%2FcSKvRQ45TcR5rzHAAUcY%3D--rWf9DPHqOeO4Ik3U--GopPYFaT9zDHW7qwRxFCRg%3D%3D; intercom-session-dyws6i9m=T0lqZjkwLy9DSDdjRVNPZm16TTRCWTNpakdmMFdLMlBmQVkyYlozcW9KSEtYVUdPczdBVnEwd0I1Y0dlTVhZbC0tSmZOSk9NSXhZUDFpdEU3WFRqQ0ZiQT09--bfe81ef1e7cbd9fb206f4bf1884d1dea7ef35bd3; _dd_s=rum=0&expire=1686743733373',
    'origin': 'https://app.apollo.io',
    'referer': 'https://app.apollo.io/',
    'sec-ch-ua': '',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '""',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'x-csrf-token': 'yXwy453WTV7AzxSMcZ1ZsZs2EZf4g5zo3DA5GjZmt2_MPiMjxqavmbbXRtx7ox5B_55rWQmnJvURHKzWIZRxyQ',
}



        company_cookies =  {
    'zp__initial_referrer': 'https://www.google.com/',
    'zp__utm_content': 'brand_exact',
    'zp__initial_utm_content': 'brand_exact',
    'zp__utm_medium': 'cpc',
    'zp__initial_utm_medium': 'cpc',
    'zp__utm_source': 'google',
    'zp__initial_utm_source': 'google',
    'zp__utm_campaign': 'gg_in_dg_search_brand_en',
    'zp__initial_utm_campaign': 'gg_in_dg_search_brand_en',
    'zp__utm_term': 'apollo.io',
    'zp__initial_utm_term': 'apollo.io',
    'mutiny.user.token': '08d90e30-e1cd-4fb1-a73d-492ed5973902',
    '_gcl_aw': 'GCL.1686559144.EAIaIQobChMIq_X6s6q9_wIVh5BLBR1j0g3mEAAYASAAEgL8KvD_BwE',
    '_gcl_au': '1.1.1363157525.1686559144',
    '_ga': 'GA1.1.759764751.1686559144',
    '_ga_76XXTC73SP': 'GS1.1.1686559143.1.0.1686559145.58.0.0',
    'hubspotutk': '5d86236729c4ece5963bbb5af65704ed',
    '_cioanonid': '11e5ba23-8270-c02c-085e-3fb5d0d89d95',
    'remember_token_leadgenie_v2': 'eyJfcmFpbHMiOnsibWVzc2FnZSI6IklqWTBOV0kzWmpNeU5ERXpPRFk0TURCaE16WTJaVFUxTlY5c1pXRmtaMlZ1YVdWamIyOXJhV1ZvWVhOb0lnPT0iLCJleHAiOiIyMDIzLTA3LTEyVDA4OjM5OjMyLjIxNFoiLCJwdXIiOiJjb29raWUucmVtZW1iZXJfdG9rZW5fbGVhZGdlbmllX3YyIn19--9b1c7556ca8be9cab8b132d1d05b4a7619090821',
    'intercom-device-id-dyws6i9m': '0244e817-c50a-42a3-a5f3-e6b9611f4a93',
    '_cioid': '645b7f3241386800a366e555',
    '__stripe_mid': '88ef40b8-3e8c-4a7e-ad97-f282bed6d739a31548',
    'GCLB': 'CJ7G9ZnZ_bTJeg',
    'amplitude_id_122a93c7d9753d2fe678deffe8fac4cfapollo.io': 'eyJkZXZpY2VJZCI6ImE1YzU4MjNmLTkwMjgtNDFhZC04M2M1LTcyZDQ5NjgyOTExOFIiLCJ1c2VySWQiOiI2NDViN2YzMjQxMzg2ODAwYTM2NmU1NTUiLCJvcHRPdXQiOnRydWUsInNlc3Npb25JZCI6MTY4Njc0Mjc2OTEwNSwibGFzdEV2ZW50VGltZSI6MTY4Njc0Mjc2OTEwNSwiZXZlbnRJZCI6MCwiaWRlbnRpZnlJZCI6MSwic2VxdWVuY2VOdW1iZXIiOjF9',
    '__hstc': '21978340.5d86236729c4ece5963bbb5af65704ed.1686559146924.1686559146924.1686742769114.2',
    '__hssrc': '1',
    '__hssc': '21978340.1.1686742769114',
    'ZP_Pricing_Split_Test_Variant': '23Q1_EC_Y49',
    '__stripe_sid': '7ca7dfc1-aa88-46ba-b2f3-ad57f7c30fdf7c0938',
    'X-CSRF-TOKEN': 'yXwy453WTV7AzxSMcZ1ZsZs2EZf4g5zo3DA5GjZmt2_MPiMjxqavmbbXRtx7ox5B_55rWQmnJvURHKzWIZRxyQ',
    '_leadgenie_session': 'yyvmxcK8M61ZqbdSFa9t9fHlkJDt4JsSba%2FLb1vhnDAvwjvfTpwgedSNqpY5b0F%2BA3EiRPfgmKcT7wZ%2FGCOYKuu8WouHRjGemHzWZaIFJu7k%2BwHhyfGTXziMefh3e4wIlfE76OEqgXJwuLltbvXDXiCjkVhD8O5lcryX%2FadgxS8Db5peKfXV9C5oEC9FtrC0eaQK%2FT7sqZVgx6uZ9NJgPKkhjg18ox9W%2FheJRidOpWMSxT3Z7p216kOXosWOjik7NolGk1Qzyp5tEB%2FcSKvRQ45TcR5rzHAAUcY%3D--rWf9DPHqOeO4Ik3U--GopPYFaT9zDHW7qwRxFCRg%3D%3D',
    'intercom-session-dyws6i9m': 'T0lqZjkwLy9DSDdjRVNPZm16TTRCWTNpakdmMFdLMlBmQVkyYlozcW9KSEtYVUdPczdBVnEwd0I1Y0dlTVhZbC0tSmZOSk9NSXhZUDFpdEU3WFRqQ0ZiQT09--bfe81ef1e7cbd9fb206f4bf1884d1dea7ef35bd3',
    '_dd_s': 'rum=0&expire=1686743733373',
}

        cred = LeadFinder.getDataCredentials()
        result = {
            "headers":  merge_dicts_in_one_dict([company_headers, cred['headers']]),
            "cookies":     merge_dicts_in_one_dict([company_cookies, cred["cookies"]]),
            "proxies": cred['proxies'], 
        }

        return result
    
