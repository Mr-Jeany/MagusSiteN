import heapq

from .dota_requests import OpenDotaRequester
from .ds_utils import ListWorker

def dicts_to_list(source):
    found_keys = list(filter(None, [x if isinstance(source[0][x], int | float) else None for x in source[0]]))

    keys_values = {key: [] for key in found_keys}

    for match in source:
        for key in found_keys:
            keys_values[key].append(match[key])

    return keys_values


def averages_dicts(source):
    """
    Allows to find averages of values from dictionaries.
    :param source: List with dictionaries
    :return: Float number - average.
    """

    keys_values = dicts_to_list(source)
    averages = {key: round(sum(values) / len(values), 1) for key, values in keys_values.items()}

    return averages


def maxes_dicts(source, number_of_maxes: int=5):
    maxes = {}
    keys_values = dicts_to_list(source)

    for key, values in keys_values.items():
        maxes[key] = heapq.nlargest(number_of_maxes, values)

    return maxes


def mins_dicts(source, number_of_maxes: int=5):
    maxes = {}
    keys_values = dicts_to_list(source)

    for key, values in keys_values.items():
        maxes[key] = heapq.nsmallest(number_of_maxes, values)

    return maxes


def get_stats_from_match(source):
    return source["stats"]


def find_stat_perfomance(source):
    p_changes = ListWorker.percent_changes(source)

    stages = {
        "early_game": source[0:11],  # 0-10 minutes
        "mid_game": source[11:26],  # 11-25 minutes
        "late_game": source[26:51],  # 26-50 minutes
        "ultra_late_game": source[51:]  # 51+ minutes
    }

    stages_pc = {
        "early_game": p_changes[0:11],  # 0-10 minutes
        "mid_game": p_changes[11:26],  # 11-25 minutes
        "late_game": p_changes[26:51],  # 26-50 minutes
        "ultra_late_game": p_changes[51:]  # 51+ minutes
    }

    stages_pc_means = {stage: ListWorker.mean(values) for stage, values in stages_pc.items()}
    stages_be = {stage: ListWorker.percent_be(values) for stage, values in stages.items()}

    ratings = {stage: round(ListWorker.rate_changes(values, stages_pc_means[stage]), 4) for stage, values in stages_be.items()}

    print(stages_be)
    print(stages_pc_means)
    #return source, stages, stages_pc, stages_pc_means, stages_be, ratings
    return ratings

def process_query(source: dict):
    result = {}

    for qid, value in source.items():
        value = value.split(";")
        result[qid] = {
            "player": value[0],
            "statistic": value[1],
            "heroes": value[2].split(','),
            "isWin": value[3],
            "color": value[4],
            "display": f"{OpenDotaRequester.get_player_name(value[0])}: {value[1]}"
        }

    return result