class Placeholders:
    @staticmethod
    def simple(text, symbol, **arguments):
        text_baking = text
        for ph, value in arguments.items():
            text_baking = text_baking.replace(symbol + ph, str(value))

        return text_baking

