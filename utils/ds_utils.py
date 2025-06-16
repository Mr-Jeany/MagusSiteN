class ListWorker:
    @staticmethod
    def mean(source):
        if len(source) == 0:
            return 0
        return sum(source) / len(source)

    @staticmethod
    def deviations(source):
        mean = ListWorker.mean(source)
        deviats = [mean - x for x in source]
        return deviats

    @staticmethod
    def percent_changes(source):
        p_changes = [0]
        for el_n in range(len(source)-2):
            # (new - old) / old
            if source[el_n] == 0: continue

            res = (source[el_n+1] - source[el_n]) / source[el_n]

            p_changes.append(res)

        return p_changes

    @staticmethod
    def percent_be(source):
        if len(source) == 0:
            return None
        if len(source) < 10:
            end = ListWorker.get_awaited_result(source, 10-len(source))
        else:
            end = source[-1]
        return (end - source[0]) / source[0]

    @staticmethod
    def rate_changes(source, coef, top_limit=0.15, mid_limit=0.05):
        if source == None:
            return 0

        if source > top_limit:
            return (1 + (source))*(1 + coef) - 1
        elif source > mid_limit:
            return (1 + (source))*(1 + coef) - 1
        else:
            return (1 - (abs(source)))*(1 + coef) - 1


    @staticmethod
    def get_awaited_result(source, extra_steps):
        awaited_change_per_element = ListWorker.mean(ListWorker.percent_changes(source))

        return source[-1] * (1 + awaited_change_per_element)**extra_steps

    @staticmethod
    def filter_dict(source, whitelist):
        allowed_parametrs = whitelist

        result = {key: value for key, value in source.items() if key in allowed_parametrs}

        return result


    @staticmethod
    def filter_sort_dict(source, whitelist):
        allowed_parametrs = whitelist

        result = {key: source[key] for key in allowed_parametrs}

        return result