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
        strnum = " ".join(map(str, triangle[i]))
        spacect = " "* (num - 1 -i)
        print(spacect + strnum)
        

    # return triangle
    

pascal_triangle(6)