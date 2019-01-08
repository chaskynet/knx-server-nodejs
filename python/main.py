"""
For example if you simply want to log an entry each time a light is turned off or on:
"""

import knx
import asyncio

"""
@knx.coroutine
def logger():
    while True:
        telegram = (yield)
        print('Telegram from {0} sent to {1} with value: {2}'.format(
                                telegram.src, telegram.dst, telegram.value))

loop = asyncio.get_event_loop()
coro = knx.bus_monitor(logger(), host='192.168.4.214', port=3671)
loop.run_until_complete(coro)


"""
def main():
        connection = knx.connect(host='192.168.4.214', port=3671)
        return connection

if __name__ == '__main__':
        main()
