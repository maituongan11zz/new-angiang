# # -*- coding: utf-8 -*-

# import pandas as pd
# from pandas import ExcelWriter
# from pandas import ExcelFile
import psycopg2
import sys
import json
# import datetime
pointid = sys.argv[1]

conn = psycopg2.connect(host='localhost',
                        port='5432',
                        user='postgres',
                        password='nguyenq12345678',
                        database='postgres')

cursor = conn.cursor()


postgreSQL_select_Query = """SELECT DISTINCT thoigian FROM excel_matcat WHERE pointid = '"""+str(pointid)+"""';"""

cursor.execute(postgreSQL_select_Query)
result = cursor.fetchall()
final = []
for row in result:

    q = str(row[0])
    value = []
    postgreSQL_selectQuery = """SELECT khoangcach,dosau FROM excel_matcat WHERE pointid = '"""+str(pointid)+"""' and thoigian = '"""+str(q)+"""';"""
    cursor.execute(postgreSQL_selectQuery)
    result0 = cursor.fetchall() 

    for i in result0:
        khoangcach = i[0]
        dosau = i[1]
        temp = {'khoangcach':khoangcach,'dosau':dosau}
        value.append(temp)
    # qparse = datetime.datetime.strptime(q, "%Y-%m-%d").strftime("%d-%m-%Y")
    done = {'thoigian':str(q),'values':value}
    final.append(done)
# ENCODING = sys.stdout.encoding if sys.stdout.encoding else 'utf-8'
# print unicode("<div class='line'>%s</div>" % l, encoding).encode(ENCODING)
# print(final).encode(ENCODING)
print(final)
# print(json.dumps(final))