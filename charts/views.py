from django.shortcuts import render
from django.http import JsonResponse

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

def main(request):
    sr = StratzRequests()

    rd = request.GET.dict()
    if not rd:
        context = {
            "data": {},
            "length": 25,
            "error": None
        }
        return render(request, template_name="charts/newIndex.html", context=context)

    try:
        query = process_query(rd)
    except Exception as e:
        context = {
            "data": {},
            "length": 25,
            "error": "Введены неправильные значения..."
        }
        return render(request, template_name="charts/newIndex.html", context=context)

    length = 25
    returned_data = {}
    
    for qid, info in query.items():
        try:
            lms = dicts_to_list(sr.last_matches_personal_stats(info["player"], info["heroes"], length))
            if not lms or info["statistic"] not in lms or not lms[info["statistic"]]:
                continue
                
            returned_data[qid] = {
                "player": info["player"],
                "values": lms[info["statistic"]][::-1],
                "color": info["color"],
                "display": info["display"],
            }
        except Exception as e:
            continue

    if not returned_data:
        context = {
            "data": {},
            "length": 25,
            "error": "Введены неправильные значения..."
        }
        return render(request, template_name="charts/newIndex.html", context=context)

    context = {
        "data": returned_data,
        "debug": query,
        "length": length,
        "error": None
    }

    return render(request, template_name="charts/newIndex.html", context=context)

def fof(request, anyt):
    return render(request, '404.html')