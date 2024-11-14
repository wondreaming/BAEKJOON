fun main() {
    val input = readln().trim().split(" ").map{ it.toInt() }
    var sum = 0

    for (i in input) {
        sum += i * i
    }

    val result = sum % 10
    println(result)
}
