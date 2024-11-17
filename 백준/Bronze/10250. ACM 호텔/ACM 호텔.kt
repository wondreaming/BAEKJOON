fun main() {
    val T = readln().toInt()
    val result = mutableListOf<String>()

    for (i in 1..T) {
        val (H, W, N) = readln().split(" ").map { it.toInt() }
        var person = 0
        var correctH = 0
        var correctW = 0

        for (l in 1..W) {
            for (k in 1..H) {
                person++
                if (person == N) {
                    correctW = l
                    correctH = k
                    if (correctW < 10) result.add(correctH.toString() + "0" + correctW)
                    else result.add(correctH.toString() + correctW.toString())
                    break
                }
            }
        }
    }

    println(result.joinToString("\n"))
}