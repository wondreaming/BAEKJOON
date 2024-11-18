fun main() {
    val T = readln().toInt()
    val result = mutableListOf<Int>()
    for (i in 1..T) {
        var socre = 0
        var count = 1

        val ox = readln().split("")

        for (j in ox) {
            if (j == "O") {
                socre += count
                count++
            } else {
                count = 1
            }
        }

        result.add(socre)
    }
    println(result.joinToString("\n"))
}