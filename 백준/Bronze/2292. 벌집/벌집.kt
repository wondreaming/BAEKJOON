fun main() {
    val N = readln().toInt()

    var countNums = 1
    var count = 1

    while (countNums < N) {
        countNums += 6 * count
        count++
    }

    println(count)
}