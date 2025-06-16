from django.shortcuts import render

from utils.dota_requests import StratzRequests
from utils.processors import dicts_to_list, process_query


# Create your views here.
def index(request):

    sr = StratzRequests()

    rd = request.GET.dict()

    query = process_query(rd)

    length = 25

    returned_data = {}
    for qid, info in query.items():
        print(info)
        lms = dicts_to_list(sr.last_matches_personal_stats(info["player"], info["heroes"], length))
        returned_data[qid] = {
            "player": info["player"],
            "values": lms[info["statistic"]][::-1],
            "color": info["color"],
            "display": info["display"],
        }


    context = {"data": returned_data,
               "debug": query,
               "length": length}

    return render(request, template_name="charts/index.html", context=context)