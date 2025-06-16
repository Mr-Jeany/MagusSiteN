from utils import config
import requests
from utils.text_utils import Placeholders

class StratzRequests:
    def __init__(self):
        self.token = config.BEARER

        self.headers = {
            "Authorization": self.token,
            "User-Agent": "STRATZ_API",
            "Content-Type": "application/json"
        }


    def request_data(self, request_text):
        result = requests.post("https://api.stratz.com/graphql", headers=self.headers, json={"query": request_text}).json()

        if "data" in result:
            return result["data"]
        else:
            print("Error caught.")
            print(result["errors"][0]["message"])
            return


    def last_matches_personal_stats(self, player_id, heroes, number_of_matches: int=10, skip_matches: int=0):
        if heroes == ["-1"]:
            heroes = []
        baking_request = '''
        {
            player (steamAccountId: %player_id)
            {
                matches (request: {take: %number_of_matches, skip: %skip_matches, heroIds: %heroes})
                {
                    players (steamAccountId: %player_id)
                    {
                        kills
                        deaths
                        assists
                        
                        goldPerMinute
                        experiencePerMinute
                        
                        heroDamage
                        towerDamage
                        heroHealing
                        
                        numLastHits
                        numDenies
                        
                        networth
                        
                        stats {
                            goldPerMinute
                            experiencePerMinute
                        }
                    }
                }
            }
        }
        '''

        heroes_str = "["+",".join(heroes)+"]"

        baking_request = Placeholders.simple(baking_request, "%",
                                             player_id=player_id,
                                             number_of_matches=number_of_matches,
                                             skip_matches=skip_matches,
                                             heroes=heroes_str)

        data = self.request_data(baking_request)

        # Now we convert it to a list format
        stats_combined = []
        for match in data["player"]["matches"]:
            personal_stats = match["players"][0]
            stats_combined.append(personal_stats)

        return stats_combined

    def specific_match_player(self, match_id, player_id):
        baking_request = '''
                {
                    match (id: %match_id)
                    {
                        players (steamAccountId: %player_id)
                        {
                            kills
                            deaths
                            assists
                            
                            goldPerMinute
                            experiencePerMinute
                            
                            heroDamage
                            towerDamage
                            heroHealing
                            
                            numLastHits
                            numDenies
                            
                            networth
                            
                            stats {
                                goldPerMinute
                                experiencePerMinute
                            }
                        }
                    }
                }
                '''

        baking_request = Placeholders.simple(baking_request, "%",
                                             player_id=player_id,
                                             match_id=match_id)

        data = self.request_data(baking_request)

        return data["match"]["players"][0]

    def specific_match_stats(self, player_id, match_id):
        baking_request = '''
        {
            match (id: %match_id) {
                players (steamAccountId: %player_id) {
                    stats {
                        goldPerMinute
                        experiencePerMinute
                    }
                }
            }
        }
        '''

        baking_request = Placeholders.simple(baking_request, "%",
                                             player_id=player_id,
                                             match_id=match_id)

        data = self.request_data(baking_request)

        return data["match"]["players"][0]["stats"]


class OpenDotaRequester:
    @staticmethod
    def get_player_name(account_id):
        j = requests.get(f"https://api.opendota.com/api/players/{account_id}").json()

        return j["profile"]["personaname"]

    @staticmethod
    def winlose(account_id):
        j = requests.get(f"https://api.opendota.com/api/players/{account_id}/wl").json()

        return {"wins": j["win"],
                "loses": j["lose"],
                "wr": j["win"] / (j["win"] + j["lose"])}