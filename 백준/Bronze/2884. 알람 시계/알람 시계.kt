fun main() {
    var (H, M) = readln().split(" ").map { it.toInt() }
    when {
        M < 45 -> {
            H--
            M += 15
        }

        else -> M -= 45
    }

    if (H == -1) H = 23
    println("$H $M")
}