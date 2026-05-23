def pascal_triangle(num) :
    triangle = []
    for n in range(num):
        row = [1] * (n + 1)
        for p in range(1,n):
            row[p] = triangle[n-1][p-1] + triangle[n-1][p]
        triangle.append(row)
        # print(row)
    # print(triangle)
    for i in range(num):
        strnum = ""
        for y in range(i+1):
            strnum += str(triangle[i][y])
            strnum += " "
        spacect = ""
        for x in range(num - i - 1):
            spacect += " "
        print(spacect + strnum)
        

    # return triangle
    

pascal_triangle(6)